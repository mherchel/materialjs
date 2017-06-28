import { animation, button } from '../variables';
import { typoButton, shadow, focusShadow } from '../common';

const buttonComponent = {
  flat: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: button.dimensions.borderRadius,
    color: button.colors.secondaryColor,
    position: 'relative',
    height: button.dimensions.height,
    margin: 0,
    minWidth: button.dimensions.minWidth,
    padding: `0 ${button.dimensions.padding}`,
    display: 'inline-block',
    ...typoButton(),
    overflow: 'hidden',
    willChange: 'box-shadow',
    transition: `box-shadow 0.2s ${animation.curveFastOutLinearIn},
               background-color 0.2s ${animation.curveFastOutLinearIn},
               color 0.2s ${animation.curveDefault}`,
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    lineHeight: button.dimensions.height,
    verticalAlign: 'middle',

    '-moz-focus-inner': {
      border: 0,
    },

    ':hover': {
      backgroundColor: button.colors.hoverColor,
    },

    ':focus:not(:active)': {
      backgroundColor: button.colors.focusColor,
    },

    ':active': {
      backgroundColor: button.colors.activeColor,
    },
  },
};

buttonComponent.raised = {
  ...buttonComponent.flat,
  backgroundColor: button.colors.primaryColor,
  ...shadow(2),
  ':active': {
    ...shadow(4),
    backgroundColor: button.colors.activeColor,
  },
  ':focus:not(:active)': {
    ...focusShadow(),
    backgroundColor: button.colors.activeColor,
  },
};

export default buttonComponent;
