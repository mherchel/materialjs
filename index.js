'use strict';

const pink = {
  50: '252, 228, 236',
  100: '248, 187, 208',
  200: '244, 143, 177',
  300: '240, 98, 146',
  400: '236, 64, 122',
  500: '233, 30, 99',
  600: '216, 27, 96',
  700: '194, 24, 91',
  800: '173, 20, 87',
  900: '136, 14, 79',
  A100: '255, 128, 171',
  A200: '255, 64, 129',
  A400: '245, 0, 87',
  A700: '197, 17, 98'
};





const indigo = {
  50: '232, 234, 246',
  100: '197, 202, 233',
  200: '159, 168, 218',
  300: '121, 134, 203  ',
  400: '92, 107, 192',
  500: '63, 81, 181',
  600: '57, 73, 171',
  700: '48, 63, 159',
  800: '40, 53, 147',
  900: '26, 35, 126',
  A100: '140, 158, 255',
  A200: '83, 109, 254',
  A400: '61, 90, 254',
  A700: '48, 79, 254'
};

























const grey = {
  50: '250, 250, 250',
  100: '245, 245, 245',
  200: '238, 238, 238',
  300: '224, 224, 224',
  400: '189, 189, 189',
  500: '158, 158, 158',
  600: '117, 117, 117',
  700: '97, 97, 97',
  800: '66, 66, 66',
  900: '33, 33, 33'
};



const black = '0, 0, 0';
const white = '255, 255, 255';

const colors = {
  primary: indigo[500],
  primaryDark: indigo[700],
  accent: pink.A200,
  primaryContrast: white,
  accentContrast: white
};

const animation = {
  curveFastOutSlowIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
  curveLinearOutSlowIn: 'cubic-bezier(0, 0, 0.2, 1)',
  curveFastOutLinearIn: 'cubic-bezier(0.4, 0, 1, 1)'
};
animation.curveDefault = animation.curveFastOutSlowIn;

const button = {
  dimensions: {
    minWidth: '64px',
    height: '36px',
    padding: '16px',
    margin: '4px',
    borderRadius: '2px',

    fabSize: '56px',
    fabSizeMini: '40px',
    fabFontSize: '24px',

    iconSize: '32px',
    iconSizeMini: '24px'
  },
  colors: {
    // Default button colors.
    primaryColor: `rgba(${grey[500]}, 0.20)`,
    secondaryColor: `rgb(${black})`,
    hoverColor: `rgba(${grey[500]}, 0.20)`,
    activeColor: `rgba(${grey[500]}, 0.40)`,
    focusColor: `rgba(${black}, 0.12)`,

    // Colored button colors.
    primaryColorAlt: `rgb(${colors.primary})`,
    secondaryColorAlt: `rgb(${colors.primaryContrast})`,
    hoverColorAlt: `rgb(${colors.primary})`,
    activeColorAlt: `rgb(${colors.primary})`,
    focusColorAlt: `rgba(${black}, 0.12)`,

    // Ripple color for colored raised buttons.
    rippleColorAlt: `rgb(${colors.primaryContrast})`,

    // Disabled button colors.
    primaryColorDisabled: `rgba(${black}, 0.12)`,
    secondaryColorDisabled: `rgba(${black}, 0.26)`,

    // FAB colors and sizes.
    fabColorAlt: `rgb(${colors.accent})`,
    fabHoverColorAlt: `rgb(${colors.accent})`,
    fabActiveColorAlt: `rgb(${colors.accent})`,
    fabTextColorAlt: `rgb(${colors.accentContrast})`,
    fabRippleColorAlt: `rgb(${colors.accentContrast})`,

    // Icon button colors and sizes.
    iconColor: `rgb(${grey[700]})`,
    iconFocusColor: `rgba(${black}, 0.12)`
  }
};

const typography = {
  preferredFont: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  performanceFont: ['Helvetica', 'Arial', 'sans-serif']
};

const shadows = {
  keyUmbraOpacity: 0.2,
  keyPenumbraOpacity: 0.14,
  ambientShadowOpacity: 0.12
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const base = {};

base.html = {
  fontFamily: typography.preferredFont,
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px'
};

base.heading = (level = 1) => {
  let heading = {
    margin: '24px 0 24px 0',
    padding: 0
  };

  switch (level) {
    case 1:
      heading = _extends({}, heading, {
        fontSize: '56px',
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: '-0.02em'
      });
      break;
    case 2:
      heading = _extends({}, heading, {
        fontSize: '45px',
        fontWeight: 400,
        lineHeight: '48px'
      });
      break;
    case 3:
      heading = _extends({}, heading, {
        fontSize: '34px',
        fontWeight: 400,
        lineHeight: '40px'
      });
      break;
    case 4:
      heading = _extends({}, heading, {
        fontSize: '112px',
        fontWeight: 300,
        lineHeight: 1,
        letterSpacing: '-0.04em'
      });
      break;
    case 5:
      heading = _extends({}, heading, {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: '0.02em',
        marginBottom: '16px'
      });
      break;
    case 6:
      heading = _extends({}, heading, {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.04em',
        marginBottom: '16px'
      });
      break;
  }

  return heading;
};

base.text = {
  fontSize: '14p',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: 0
};

base.link = {
  color: colors.accent,
  fontWeight: 500
};

base.blockquote = {
  position: 'relative',
  fontSize: '24px',
  fontWeight: 300,
  fontStyle: 'italic',
  lineHeight: 1.35,
  letterSpacing: '0.08em',

  ':before': {
    position: 'absolute',
    left: '-0.5em',
    content: '“'
  },

  ':after': {
    content: '”',
    marginLeft: '-0.05em'
  }
};

base.mark = {
  backgroundColor: '#f4ff81'
};

base.dt = {
  fontWeight: 700
};

base.address = {
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 0
};

base.list = {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: 0
};

const shadow = (depth = 2) => {
  switch (depth) {
    case 2:
      return {
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 1px -2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 1px 5px 0 rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 3:
      return {
        boxShadow: `0 3px 4px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 3px -2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 1px 8px 0 rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 4:
      return {
        boxShadow: `0 4px 5px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 1px 10px 0px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 2px 4px -1px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 6:
      return {
        boxShadow: `0 6px 10px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 1px 18px 0 rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 3px 5px -1px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 8:
      return {
        boxShadow: `0 8px 10px 1px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 14px 2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 5px 5px -3px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 16:
      return {
        boxShadow: `0 16px 24px 2px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 6px 30px 5px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 8px 10px -5px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    case 24:
      return {
        boxShadow: `0 9px 46px 8px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 11px 15px -7px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 24px 38px 3px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`
      };
    default:
      return {};
  }
};

const focusShadow = () => ({
  boxShadow: '0 0 8px rgba(0, 0,0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36)'
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const buttonComponent = {};

buttonComponent.default = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: button.dimensions.borderRadius,
  color: button.colors.secondaryColor,
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: typography.preferredFont,
  fontSize: '14px',
  fontWeight: 500,
  height: button.dimensions.height,
  lineHeight: button.dimensions.height,
  letterSpacing: 0,
  margin: 0,
  minWidth: button.dimensions.minWidth,
  outline: 'none',
  overflow: 'hidden',
  padding: `0 ${button.dimensions.padding}`,
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: `box-shadow 0.2s ${animation.curveFastOutLinearIn},
               background-color 0.2s ${animation.curveFastOutLinearIn},
               color 0.2s ${animation.curveDefault}`,
  verticalAlign: 'middle',
  willChange: 'box-shadow',

  '-moz-focus-inner': {
    border: 0
  }
};

buttonComponent.flat = _extends$1({}, buttonComponent.default, {
  ':hover': {
    backgroundColor: button.colors.hoverColor
  },

  ':focus:not(:active)': {
    backgroundColor: button.colors.focusColor
  },

  ':active': {
    backgroundColor: button.colors.activeColor
  }
});

buttonComponent.flatColored = _extends$1({}, buttonComponent.flat, {
  color: button.colors.primaryColorAlt,
  ':focus:not(:active)': {
    backgroundColor: button.colors.focusColorAlt
  }
});

buttonComponent.flatAccent = _extends$1({}, buttonComponent.flat, {
  color: button.colors.fabColorAlt
});

buttonComponent.raised = _extends$1({}, buttonComponent.default, {
  backgroundColor: button.colors.primaryColor
}, shadow(2), {
  ':active': _extends$1({}, shadow(4), {
    backgroundColor: button.colors.activeColor
  }),
  ':focus:not(:active)': _extends$1({}, focusShadow(), {
    backgroundColor: button.colors.activeColor
  })
});

buttonComponent.raisedColored = _extends$1({}, buttonComponent.raised, {
  backgroundColor: button.colors.primaryColorAlt,
  color: button.colors.secondaryColorAlt,
  ':hover': {
    backgroundColor: button.colors.hoverColorAlt
  },
  ':active': _extends$1({}, shadow(4), {
    backgroundColor: button.colors.activeColorAlt
  }),
  ':focus:not(:active)': _extends$1({}, focusShadow(), {
    backgroundColor: button.colors.activeColorAlt
  })
});

buttonComponent.raisedAccent = _extends$1({}, buttonComponent.raised, {
  backgroundColor: button.colors.fabColorAlt,
  color: button.colors.fabTextColorAlt,
  ':hover': {
    backgroundColor: button.colors.fabHoverColorAlt
  },
  ':active': _extends$1({}, shadow(4), {
    backgroundColor: button.colors.fabActiveColorAlt
  }),
  ':focus:not(:active)': _extends$1({}, focusShadow(), {
    backgroundColor: button.colors.fabActiveColorAlt
  })
});

const materialjs = {};

materialjs.base = base;
materialjs.button = buttonComponent;

module.exports = materialjs;
