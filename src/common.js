import { typography, shadows } from './variables';

export const shadow = (depth = 2) => {
  switch (depth) {
    case 2:
      return {
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 1px -2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 1px 5px 0 rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 3:
      return {
        boxShadow: `0 3px 4px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 3px -2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 1px 8px 0 rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 4:
      return {
        boxShadow: `0 4px 5px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 1px 10px 0px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 2px 4px -1px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 6:
      return {
        boxShadow: `0 6px 10px 0 rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 1px 18px 0 rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 3px 5px -1px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 8:
      return {
        boxShadow: `0 8px 10px 1px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 3px 14px 2px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 5px 5px -3px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 16:
      return {
        boxShadow: `0 16px 24px 2px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 6px 30px 5px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 8px 10px -5px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    case 24:
      return {
        boxShadow: `0 9px 46px 8px rgba(0, 0, 0, ${shadows.keyPenumbraOpacity}),
                    0 11px 15px -7px rgba(0, 0, 0, ${shadows.keyUmbraOpacity}),
                    0 24px 38px 3px rgba(0, 0, 0, ${shadows.ambientShadowOpacity})`,
      };
    default:
      return {};
  }
};

export const focusShadow = () => ({
  boxShadow: '0 0 8px rgba(0, 0,0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36)',
});
