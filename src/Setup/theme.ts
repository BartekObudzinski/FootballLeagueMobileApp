const theme: {
  colors: { [key: string]: string };
  fontSize: { [key: string]: number };
  fontFamily: { [key: string]: string };
} = {
  colors: {
    WHITE: '#FFF',
    BLACK: '#000',
    DARK_WHITE: '#eeeeee66',
    DEEP_DARK_BLUE: '#00141e',
    LIGHT_GREEN: '#c3e45d',
    DARK_GREEN_OPACITY: '#6e8f0966',
  },
  fontSize: {
    small: 15,
    medium: 25,
    large: 40,
  },
  fontFamily: {
    light: 'Baloo-Light',
    regular: 'Baloo-Regular',
    bold: 'Baloo-Bold',
  },
};

export default theme;
