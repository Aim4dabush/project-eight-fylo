import styled from "styled-components";
import { cyan, lightBlue, white } from "../Variables/JS";

const Button = styled.button`
  background-image: linear-gradient(-45deg, ${cyan}, ${lightBlue});
  background-size: cover;
  border: none;
  border-radius: 24px;
  color: ${white};
  cursor: pointer;
`;

export const IntroButton = styled(Button)`
  height: 48px;
  font-size: 14px;
  font-weight: 700px;
  width: 240px;
  z-index: 1;
`;
