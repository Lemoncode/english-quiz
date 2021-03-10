import { css } from 'emotion';
import { theme } from '../../../core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const backContainer = css`
  margin-top: ${spacing(19)};
  margin-bottom: ${spacing(6)};
  padding: ${spacing(10)} ${spacing(5)} ${spacing(1)};
  height: 26rem;
  position: relative;
  background-color: ${color.lightWhite};
  border-radius: 2rem;
`;

export const insideBtnContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const insideBtn = css`
  text-align: center;
`;

export const insideRightAnswer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const buttonRight = css`
  text-align: center;
  border-radius: 1.4rem;
  width: ${spacing(20)};
  margin: ${spacing(4)} auto 0 auto;
  padding: ${spacing(2.5)} ${spacing(3)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: #33cc33;
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  @media (min-width: ${breakpoints.values.xs}px) {
    width: ${spacing(30)};
    justify-content: flex-end;
  }
`;

export const buttonWrong = css`
  border-radius: 1.4rem;
  width: ${spacing(20)};
  margin: ${spacing(4)} auto 0 auto;
  padding: ${spacing(2)} ${spacing(3)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: ${color.primaryMain};
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  @media (min-width: ${breakpoints.values.xs}px) {
    width: ${spacing(30)};
    justify-content: flex-end;
  }
`;

export const picture = css`
  max-width: 100%;
  margin-top: 1.5rem;
`;

export const pictureContainer = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: ${color.lightWhite};
  width: 10rem;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 2rem;
  -webkit-box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
  box-shadow: 2px 3px 23px 5px rgba(140, 140, 140, 0.38);
  @media (min-width: ${breakpoints.values.xs}px) {
    width: 12rem;
  }
`;

export const answer = css`
  display: block;
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem;
  text-align: center;
  text-decoration: underline;
`;

export const verbsForm = css`
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
`;
