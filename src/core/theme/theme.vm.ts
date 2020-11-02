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
    pink: string;
    lightPink: string;
    yellow: string;
    lightSalmon: string;
    lightGreen: string;
  };
}

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}
