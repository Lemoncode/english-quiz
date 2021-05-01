import { css } from 'emotion';
import { theme } from 'core/theme';

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
  background-color: ${color.lightWhite};
  border-radius: 2rem;
`;

export const homeBackContainer = css`
  margin-top: ${spacing(19)};
  margin-bottom: ${spacing(6)};
  padding: ${spacing(10)} ${spacing(5)} ${spacing(1)};
  min-height: 26rem;
  position: relative;
  padding-bottom: 1.5rem;
  background-color: ${color.lightWhite};
  border-radius: 2rem;
`;

export const backgroundResult1 = css`
  background-color: #9BDE7E;
`;

export const backgroundResult2 = css`
  background-color: #F9F871;
`;

export const backgroundResult3 = css`
  background-color: #FFD180;
`;

export const backgroundResult4 = css`
  background-color: #999999;
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

export const ballons = css`
  margin-top: 2rem;
`

export const logoHome = css`
  width: 300px;
`

export const optionsList = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing(2)} 0 0;
  height: 85%;
  list-style: none;
`;

export const optionItem = css`
  display: flex;
  padding: ${spacing(1)} 0;
  & label span {
    text-transform: capitalize;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.1rem;
  }
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
    background-color: ${color.lightWhite};
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
  width: 80%;
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

export const homeButton = css`
  display: flex;
  border-radius: 1.4rem;
  width: ${spacing(26.6)};
  margin: ${spacing(3)} auto 0 auto;
  padding: ${spacing(1.5)} ${spacing(3)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #242470;
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  &:hover,
  &:active {
    outline: none;
    background-color: #e4142c;
  }
  @media (min-width: ${breakpoints.values.sm}px) {
    width: ${spacing(30)};
    justify-content: center;
  }
`

export const homeLink = css`
  color: #ffffff;
  text-decoration: none;
`

export const arrowIcon = css`
  margin-left: ${spacing(1)};
  font-size: 1.4rem;
  @media (min-width: ${breakpoints.values.xs}px) {
    margin-left: auto;
  }
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
  @media (min-width: ${breakpoints.values.sm}px) {
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
  @media (min-width: ${breakpoints.values.sm}px) {
    width: ${spacing(30)};
    justify-content: flex-end;
  }
`;

export const buttonSecondChance = css`
  border-radius: 1.4rem;
  width: ${spacing(20)};
  margin: ${spacing(4)} auto 0 auto;
  padding: ${spacing(2)} ${spacing(3)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${color.lightWhite};
  background-color: #ED7432;
  transition: all 0.2s;
  --webkit-transition: all 0.2s;
  @media (min-width: ${breakpoints.values.xs}px) {
    width: ${spacing(30)};
    justify-content: flex-end;
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

export const secondChanceText = css`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  @media (min-width: ${breakpoints.values.sm}px) {
    font-size: 1.3rem;
  }
`;
