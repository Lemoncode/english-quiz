import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const appBarDiv = css`
  flex-grow: 1;
  margin-bottom: 20%;
`;

export const appBarTitle = css`
  flex-grow: 1;
  font-size: 1.6rem;
  @media (min-width: ${breakpoints.values.xs}px) {
    font-size: 1.75rem;
  }
`;