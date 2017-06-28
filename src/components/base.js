import { colors, typography } from '../variables';

const base = {};

base.html = {
  fontFamily: typography.preferredFont,
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
};

base.heading = (level = 1) => {
  let heading = {
    margin: '24px 0 24px 0',
    padding: 0,
  };

  switch (level) {
    case 1:
      heading = {
        ...heading,
        fontSize: '56px',
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: '-0.02em',
      };
      break;
    case 2:
      heading = {
        ...heading,
        fontSize: '45px',
        fontWeight: 400,
        lineHeight: '48px',
      };
      break;
    case 3:
      heading = {
        ...heading,
        fontSize: '34px',
        fontWeight: 400,
        lineHeight: '40px',
      };
      break;
    case 4:
      heading = {
        ...heading,
        fontSize: '112px',
        fontWeight: 300,
        lineHeight: 1,
        letterSpacing: '-0.04em',
      };
      break;
    case 5:
      heading = {
        ...heading,
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: '0.02em',
        marginBottom: '16px',
      };
      break;
    case 6:
      heading = {
        ...heading,
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.04em',
        marginBottom: '16px',
      };
      break;
  }

  return heading;
};

base.text = {
  fontSize: '14p',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: 0,
};

base.link = {
  color: colors.accent,
  fontWeight: 500,
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
    content: '“',
  },

  ':after': {
    content: '”',
    marginLeft: '-0.05em',
  },
};

base.mark = {
  backgroundColor: '#f4ff81',
};

base.dt = {
  fontWeight: 700,
};

base.address = {
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 0,
};

base.list = {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: 0,
};

export default base;
