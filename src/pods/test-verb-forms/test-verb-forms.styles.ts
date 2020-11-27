import { css } from 'emotion';
import { theme } from '../../core/theme';

const { palette, spacing } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 70%;
`;

export const title = css`
  margin-top: ${spacing(4)};
  text-align: center;
`;

export const inputContainer = css`
  margin-top: ${spacing(19)};
  margin-bottom: ${spacing(6)};
  padding: ${spacing(10)} ${spacing(5)};
  height: 26rem;
  position: relative;
  background-color: ${color.lightYellow};
  border-radius: 2rem;
`;

export const pictureContainer = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: ${color.lightWhite};
  width: 12rem;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 2rem;
  -webkit-box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
  box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
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
  border-radius: 1.4rem;
  width: ${spacing(30)};
  margin: ${spacing(4)} auto 0 auto;
  padding: ${spacing(1.5)} ${spacing(3)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: ${color.primaryMain};
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
  font-size: 1.4rem;
`;
