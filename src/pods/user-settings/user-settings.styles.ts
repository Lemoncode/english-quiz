import { css } from 'emotion';
import { theme } from '../../core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 90%;
  min-height: 100vh;
  @media (min-width: ${breakpoints.values.xs}px) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.values.sm}px) {
    max-width: 24rem;
  }
`;

export const title = css`
  margin-top: ${spacing(4)};
  color: ${color.lightWhite};
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  @media (min-width: ${breakpoints.values.xs}px) {
    font-size: 1.75rem;
  }
`;

export const backContainer = css`
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(0)};
  padding: ${spacing(5)} ${spacing(5)};
  background-color: ${color.lightWhite};
  border-radius: 3rem;
`;

export const field = css`
  width: 100%;
  padding: 1rem;
`;

export const buttonsContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
