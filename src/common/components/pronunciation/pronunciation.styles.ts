import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const pronunciationContainer = css`
  display: flex;
  justify-content: center;
  padding-top: ${spacing(4)};
  flex: 100%;
  width: 100%;
  height: 100%;
  align-self: flex-end;
  position: relative;
  bottom: -65px;
}
`;

export const volumeIcon = css`
  width: ${spacing(6)};
  color: ${color.lightWhite};
  background-color: ${color.volumeLight};
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:hover,
  &:active {
    outline: none;
    background-color: ${color.volumeDark};
  }
`;
