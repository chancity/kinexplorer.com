const darkColors = {
  logoPrimary: '#fff',
  focusPrimary: '#00b0f4',
  header: {
    primary: '#fff',
    secondary: '#b9bbbe'
  },
  text: {
    normal: '#dcddde',
    muted: '#72767d',
    link: '#00b0f4'
  },
  interactive: {
    normal: '#b9bbbe',
    hover: '#dcddde',
    active: '#fff',
    muted: '#4f545c'
  },
  background: {
    primary: '#36393f',
    textArea: '#40444b',
    secondary: '#2f3136',
    secondaryAlt: '#292b2f',
    tertiary: '#202225',
    accent: '#4f545c',
    floating: '#18191c',
    mobilePrimary: '#36393f',
    mobileSecondary: '#2f3136',
    modifierHover: 'rgba(79,84,92,0.16)',
    modifierActive: 'rgba(79,84,92,0.24)',
    modifierSelected: 'rgba(79,84,92,0.32)',
    modifierAccent: 'hsla(0,0%,100%,0.06)',
    mentioned: 'rgba(250,166,26,0.05)',
    mentionedHover: 'rgba(250,166,26,0.08)',
    messageHover: 'rgba(4,4,5,0.07)',
    helpWarning: 'rgba(250,166,26,0.1)',
    helpInfo: 'rgba(0,176,244,0.1)',
  },
  elevation: {
    stroke: '0 0 0 1px rgba(4,4,5,0.15)',
    low: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
    medium: '0 4px 4px rgba(0,0,0,0.16)',
    high: '0 8px 16px rgba(0,0,0,0.24)'
  },
  scrollBar: {
    thinThumb: '#202225',
    thinTrack: 'transparent',
    autoThumb: '#202225',
    autoTrack: '#2e3338',
    autoScrollbarColorThumb: '#202225',
    autoScrollbarColorTrack: '#2f3136'
  }
}


export const theme = {
  fontFamily: 'Arial,sans-serif',
  color: {
    ...darkColors
  },
  sizes: {
    mobile: '48rem',
    tablet: '75rem',
    desktop: '90rem', // 90rem
    customerContainer: 'unset', // 56.625rem;
  },
  fontSizes: {
    mobile: '16px',
    tablet: '16px',
    desktop: '16px', // 90rem
  }
};
