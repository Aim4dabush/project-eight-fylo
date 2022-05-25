import styled from "styled-components";
import { cyan, lightBlue, raleway, white } from "../Variables/JS";

const Button = styled.button`
  background-image: linear-gradient(-45deg, ${cyan}, ${lightBlue});
  background-size: cover;
  border: none;
  border-radius: 24px;
  color: ${white};
  cursor: pointer;
  font-family: ${raleway};
  font-size: 14px;
  font-weight: 700px;
  height: 48px;
`;

export const IntroButton = styled(Button)`
  width: 240px;
  z-index: 1;

  &:hover {
    background-color: ${lightBlue};
    background-image: none;
  }
`;

export const SignUpButton = styled(Button)`
  width: 280px;

  &:hover {
    background-color: ${lightBlue};
    background-image: none;
  }
`;
