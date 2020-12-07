import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette } = theme;

export const root = bg => css`
  // Font-family property is just temporary since it is not working inside custom theme
  font-family: 'M PLUS Rounded 1c', sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${bg === 'red'
    ? palette.customPalette.primaryLight
    : palette.background.default};
`;
