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

export const backContainerVerbs = css`
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(0)};
  padding: ${spacing(5)} ${spacing(5)};
  background-color: ${color.lightWhite};
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`;

export const btnContainerVerbs = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing(5)};
`;

export const backContainerUser = css`
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(0)};
  padding: ${spacing(5)} ${spacing(5)};
  background-color: ${color.lightWhite};
  border-radius: 3rem;
`;

export const btnContainerUser = css`
  display: flex;
  justify-content: space-between;
`;

export const saveBtn = css`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  width: ${spacing(20)};
  padding: ${spacing(1)} ${spacing(2)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.2s;
  color: white;
  --webkit-transition: all 0.2s;
  &:first-of-type {
    margin-right: ${spacing(3)};
  }
`;

export const cancelBtn = css`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  width: ${spacing(20)};
  padding: ${spacing(1)} ${spacing(2)};
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
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

export const verbTitle = css`
  display: flex;
  padding: ${spacing(1)} 0;
  & label span {
    text-transform: capitalize;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const inputField = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
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

export const errorMsg = css`
  color: red;
  font-weight: 700;
`;