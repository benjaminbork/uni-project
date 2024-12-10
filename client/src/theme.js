// color design tokens export
export const colorTokens = {
  primary: {
    0: '#000000',
    10: '#21005D',
    20: '#381E72',
    30: '#4F378B',
    40: '#6750A4',
    50: '#7F67BE',
    60: '#9A82DB',
    70: '#B69DF8',
    80: '#D0BCFF',
    90: '#EADDFF',
    95: '#F6EDFF',
    99: '#FFFBFE',
    100: '#FFFFFF',
  },
  secondary: {
    0: '#000000',
    10: '#1D192B',
    20: '#332D41',
    30: '#4A4458',
    40: '#625B71',
    50: '#7A7289',
    60: '#958DA5',
    70: '#B0A7C0',
    80: '#CCC2DC',
    90: '#E8DEF8',
    95: '#F6EDFF',
    99: '#FFFBFE',
    100: '#FFFFFF',
  },
  tertiary: {
    0: '#000000',
    10: '#31111D',
    20: '#492532',
    30: '#633B48',
    40: '#7D5260',
    50: '#986977',
    60: '#B58392',
    70: '#D29DAC',
    80: '#EFB8C8',
    90: '#FFD8E4',
    95: '#FFECF1',
    99: '#FFFBFA',
    100: '#FFFFFF',
  },
  quartiary: {
    10: '#dee8dd',
    20: '#bcd2bc',
    30: '#9bbb9a',
    40: '#79a579',
    50: '#588e57',
    60: '#467246',
    70: '#355534',
    80: '#233923',
    90: '#121c11',
  },
  error: {
    0: '#000000',
    10: '#410E0B',
    20: '#601410',
    30: '#8C1D18',
    40: '#B3261E',
    50: '#DC362E',
    60: '#E46962',
    70: '#EC928E',
    80: '#F2B8B5',
    90: '#F9DEDC',
    95: '#FCEEEE',
    99: '#FFFBF9',
    100: '#FFFFFF',
  },
  neutral: {
    0: '#000000',
    10: '#1D1B20',
    20: '#48464C',
    30: '#48464C',
    40: '#605D64',
    50: '#79767D',
    60: '#938F96',
    70: '#AEA9B1',
    80: '#CAC5CD',
    90: '#E6E0E9',
    95: '#F5EFF7',
    99: '#FFFBFE',
    100: '#FFFFFF',
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      dark: colorTokens.primary[20],
      main: colorTokens.primary[40],
      light: colorTokens.primary[80],
    },

    neutral: {
      dark: colorTokens.neutral[0],
      main: colorTokens.neutral[10],
      mediumLight: colorTokens.neutral[30],
      mediumLight2: colorTokens.neutral[90],
      light: colorTokens.neutral[100],
    },
    quartiary: {
      main: colorTokens.quartiary[50],
    },
    error: {
      main: colorTokens.error[30],
    },
    background: {
      default: colorTokens.primary[95],
      alt: colorTokens.primary[90],
    },
  },

  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 12,
    fontWeight: 400,
    displayLarge: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 57,
      lineHeight: 6.4,
      letterSpacing: -0.25,
    },
    displayMedium: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 45,
      lineHeight: 5.2,
    },
    displaySmall: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 36,
      lineHeight: 4.4,
    },
    headlineLarge: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 32,
      lineHeight: 4.0,
    },
    headlineMedium: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 28,
      lineHeight: 3.6,
    },
    headlineSmall: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 24,
      lineHeight: 3.2,
    },
    titleLarge: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 22,
      lineHeight: 2.8,
    },
    titleMedium: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 16,
      lineHeight: 2.4,
      fontWeight: 500,
      letterSpacing: 0.15,
    },
    titleSmall: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 14,
      lineHeight: 2,
      fontWeight: 500,
      letterSpacing: 0.1,
    },
    labelLarge: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 14,
      lineHeight: 2,
      fontWeight: 500,
      letterSpacing: 0.1,
    },
    labelMedium: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 12,
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    labelSmall: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 11,
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    bodyLarge: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 16,
      lineHeight: 2.4,
      letterSpacing: 0.5,
    },
    bodyMedium: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 14,
      lineHeight: 2,
      letterSpacing: 0.25,
    },
    bodySmall: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 12,
      lineHeight: 1.6,
      letterSpacing: 0.4,
    },
  },
};