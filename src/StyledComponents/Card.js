import styled from "styled-components";
import { commentBG, offWhite, raleway, white } from "../Variables/JS";

export const AboutCard = styled.div`
  align-items: center;
  color: ${white};
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-bottom: 80px;
  position: relative;
  text-align: center;
  width: 320px;

  &:last-child {
    margin-bottom: 0;
  }

  h1 {
    font-family: ${raleway};
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 0;
  }

  img {
    height: 88px;
    width: 91px;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const CommentCard = styled.div`
  background-color: ${commentBG};
  color: ${offWhite};
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 160px;
  margin-bottom: 24px;
  padding: 24px 20px 0px 20px;
  width: 280px;

  &:last-child {
    margin-bottom: 0;
  }

  .user {
    display: flex;
    margin-bottom: 21px;
    margin-top: 17px;

    .user-img {
      border-radius: 50%;
      height: 24px;
      width: 24px;
    }

    .user-title {
      margin-left: 5px;

      h3 {
        font-size: 10px;
        margin: 0;
      }

      h5 {
        font-size: 7px;
        margin: 4px 0 0 0;
      }
    }
  }

  @media (min-width: 1440px) {
    height: 200px;
    width: 360px;

    .user-comment {
      font-size: 14px;
    }

    .user {
      .user-title {
        h5 {
          font-size: 8px;
        }
      }
    }
  }
`;
