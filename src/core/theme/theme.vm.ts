import { Theme as DefaultTheme } from '@material-ui/core/styles';
import { Palette as DefaultPalette } from '@material-ui/core/styles/createPalette';

interface Palette extends DefaultPalette {
  customPalette: {
    primaryLight: string;
    primaryDirty: string;
    primaryMain: string;
    primaryDark: string;
    bgLight: string;
    bgPink: string;
    bgYellow: string;
    bgBlue: string;
    dark: string;
  };
}

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}
