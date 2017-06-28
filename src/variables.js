import { grey, black, indigo, pink, white } from './colors';

export const colors = {
  primary: indigo[500],
  primaryDark: indigo[700],
  accent: pink.A200,
  primaryContrast: white,
  accentContrast: white,
};

export const animation = {
  curveFastOutSlowIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
  curveLinearOutSlowIn: 'cubic-bezier(0, 0, 0.2, 1)',
  curveFastOutLinearIn: 'cubic-bezier(0.4, 0, 1, 1)',
};
animation.curveDefault = animation.curveFastOutSlowIn;

export const button = {
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
    iconSizeMini: '24px',
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
    iconFocusColor: `rgba(${black}, 0.12)`,
  },
};

export const typography = {
  preferredFont: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  performanceFont: ['Helvetica', 'Arial', 'sans-serif'],
};

export const shadows = {
  keyUmbraOpacity: 0.2,
  keyPenumbraOpacity: 0.14,
  ambientShadowOpacity: 0.12,
};

