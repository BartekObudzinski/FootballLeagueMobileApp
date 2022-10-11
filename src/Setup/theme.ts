const theme: {
  colors: { [key: string]: string };
  fontSize: { [key: string]: number };
  fontFamily: { [key: string]: string };
} = {
  colors: {
    PRIMARY: '#219EBC',
    SECONDARY: '#023047',
    WHITE: '#FFF',
    BLACK: '#000',
    DARK_WHITE: '#eeeeee66',
    DEEP_DARK_BLUE: '#00141e',
    DARK_GREEN_OPACITY: '#02304733',
  },
  fontSize: {
    small: 20,
    medium: 30,
    large: 72,
    extraLarge: 140,
  },
  fontFamily: {
    light: 'Baloo-Light',
    regular: 'Baloo-Regular',
    bold: 'Baloo-Bold',
  },
};

export default theme;
