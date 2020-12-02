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

export const backContainer = css`
  margin-top: ${spacing(19)};
  margin-bottom: ${spacing(6)};
  padding: ${spacing(10)} ${spacing(5)} ${spacing(1)};
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

export const picture = css`
  max-width: 100%;
`;

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${spacing(4)};
  height: 85%;
`;

export const inputField = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & label {
    font-size: 1.1rem;

    font-weight: 700;
  }

  & input {
    font-family: inherit;
    border: none;
    border-bottom: 2px solid ${color.dark};
    padding: ${spacing(1)};
    font-size: 1.1rem;
    &:hover,
    &:active,
    &:focus {
      outline: none;
      border-bottom: 2px solid ${color.lightBlue};
    }
  }
`;

export const insideBtnContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const nextBtn = css`
  display: flex;
  justify-content: center;
  border-radius: 1.4rem;
  width: ${spacing(20)};
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
    background-color: ${color.primaryDark};
  }
  @media (min-width: ${breakpoints.values.xs}px) {
    width: ${spacing(30)};
    justify-content: flex-end;
  }
`;

export const arrowIcon = css`
  margin-left: ${spacing(1)};
  font-size: 1.4rem;
  @media (min-width: ${breakpoints.values.xs}px) {
    margin-left: auto;
  }
`;
