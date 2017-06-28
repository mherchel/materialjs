import { animation, button } from '../variables';
import { typoButton, shadow, focusShadow } from '../common';

const buttonComponent = {};

buttonComponent.default = {
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
};

buttonComponent.flat = {
  ...buttonComponent.default,
  ':hover': {
    backgroundColor: button.colors.hoverColor,
  },

  ':focus:not(:active)': {
    backgroundColor: button.colors.focusColor,
  },

  ':active': {
    backgroundColor: button.colors.activeColor,
  },
};

buttonComponent.flatColored = {
  ...buttonComponent.flat,
  color: button.colors.primaryColorAlt,
  ':focus:not(:active)': {
    backgroundColor: button.colors.focusColorAlt,
  },
};

buttonComponent.flatAccent = {
  ...buttonComponent.flat,
  color: button.colors.fabColorAlt,
};

buttonComponent.raised = {
  ...buttonComponent.default,
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

buttonComponent.raisedColored = {
  ...buttonComponent.raised,
  backgroundColor: button.colors.primaryColorAlt,
  color: button.colors.secondaryColorAlt,
  ':hover': {
    backgroundColor: button.colors.hoverColorAlt,
  },
  ':active': {
    ...shadow(4),
    backgroundColor: button.colors.activeColorAlt,
  },
  ':focus:not(:active)': {
    ...focusShadow(),
    backgroundColor: button.colors.activeColorAlt,
  },
};

buttonComponent.raisedAccent = {
  ...buttonComponent.raised,
  backgroundColor: button.colors.fabColorAlt,
  color: button.colors.fabTextColorAlt,
  ':hover': {
    backgroundColor: button.colors.fabHoverColorAlt,
  },
  ':active': {
    ...shadow(4),
    backgroundColor: button.colors.fabActiveColorAlt,
  },
  ':focus:not(:active)': {
    ...focusShadow(),
    backgroundColor: button.colors.fabActiveColorAlt,
  },
};

export default buttonComponent;
