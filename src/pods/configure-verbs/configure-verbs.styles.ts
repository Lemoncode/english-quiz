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
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;

export const btnContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const btn = css`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  width: ${spacing(20)};
  padding: ${spacing(1)} ${spacing(2)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${color.lightWhite};
  background-color: ${color.primaryMain};
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:first-of-type {
    margin-right: ${spacing(3)};
  }
  &:hover,
  &:active {
    outline: none;
    background-color: ${color.primaryDark};
  }
`;

export const verbList = css`
  padding: 0;
  list-style: none;
`;
