import styled from "styled-components";
import { raleway, white } from "../Variables/JS";

export const Card = styled.div`
  align-items: center;
  color: ${white};
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-bottom: 80px;
  position: relative;
  text-align: center;
  width: 320px;

  h1 {
    font-family: ${raleway};
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;
