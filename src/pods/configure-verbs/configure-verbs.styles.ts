import { css } from 'emotion';
import { theme } from '../../core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 90%;
  @media (min-width: ${breakpoints.values.xs}px) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.values.sm}px) {
    max-width: 24rem;
  }
`;

export const title = css`
  margin-top: ${spacing(4)};
  font-size: 1.6rem;
  text-align: center;
  @media (min-width: ${breakpoints.values.xs}px) {
    font-size: 1.75rem;
  }
`;
