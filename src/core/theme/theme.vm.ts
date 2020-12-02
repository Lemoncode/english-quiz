import { Theme as DefaultTheme } from '@material-ui/core/styles';
import { Palette as DefaultPalette } from '@material-ui/core/styles/createPalette';

interface Palette extends DefaultPalette {
  customPalette: {
    primaryLight: string;
    primaryMain: string;
    primaryDark: string;
    lightWhite: string;
    lightPink: string;
    lightYellow: string;
    lightBlue: string;
    dark: string;
  };
}

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}
