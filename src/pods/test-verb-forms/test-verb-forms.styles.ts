import { css } from 'emotion';
import { theme } from '../../core/theme';

const { palette, spacing } = theme;
const color = palette.customPalette;

export const insideBtnContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const nextBtn = css`
  display: flex;
  justify-content: flex-end;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  padding: ${spacing(1.5)};
  font-weight: 700;
  width: ${spacing(30)};
  background-color: ${color.primaryLight};
  color: ${color.primaryMain};
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:hover,
  &:active {
    outline: none;
    color: ${color.primaryLight};
    background-color: ${color.primaryMain};
  }
`;

export const arrowIcon = css`
  margin-left: auto;
  font-size: 1rem;
`;
