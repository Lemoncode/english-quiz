import { css } from 'emotion';
import { theme } from '../../core/theme';

const { palette, spacing } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 40%;
`;

export const inputContainer = css`
  background-color: ${color.lightYellow};
`;

export const pictureContainer = css`
  width: 18rem;
  margin: 0 auto;
  -webkit-box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
  box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
  border-radius: 2rem;
  padding: 1rem;
`;

export const picture = css`
  max-width: 100%;
`;

export const insideBtnContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const nextBtn = css`
  display: flex;
  justify-content: flex-end;
  width: ${spacing(30)};
  margin: ${spacing(4)} auto 0 auto;
  padding: ${spacing(1.5)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  color: ${color.primaryMain};
  background-color: ${color.primaryLight};
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
