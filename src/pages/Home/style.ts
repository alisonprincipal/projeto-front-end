import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 586px) {
    align-items: baseline;
  }

  div {
    h3 {
      font-weight: 700;
      font-size: 128px;
      line-height: 155px;

      strong {
        color: var(--color-primary);
      }
      @media (max-width: 740px) {
        font-size: 100px;
      }
      @media (max-width: 563px) {
        font-size: 80px;
      }
      @media (max-width: 453px) {
        font-size: 60px;
      }
      @media (max-width: 355px) {
        font-size: 40px;
        line-height: 200%;
      }
    }
    p {
      font-weight: 700;
      font-size: 64px;
      line-height: 150%;
      @media (max-width: 740px) {
        font-size: 50px;
      }
      @media (max-width: 563px) {
        font-size: 40px;
      }
      @media (max-width: 453px) {
        font-size: 30px;
      }
      @media (max-width: 355px) {
        font-size: 25px;
      }
    }
  }
`;
