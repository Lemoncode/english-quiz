import { Theme as DefaultTheme } from '@material-ui/core/styles';
import {
  Palette as DefaultPalette,
  PaletteColor,
} from '@material-ui/core/styles/createPalette';

interface Palette extends DefaultPalette {
  table?: {
    row: PaletteColor;
  };
  pastelShades?: {
    pink: PaletteColor;
    lightPink: PaletteColor;
    yellow: PaletteColor;
    lightSalmon: PaletteColor;
    lightGreen: PaletteColor;
  };
}

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}
