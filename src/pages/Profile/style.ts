import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  min-height: 80px;
  padding: 0 80px 0 80px;
  background: var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 24px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1020px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
  img {
    width: 100%;
    max-width: 257px;
    height: 48px;
  }
  .foto {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .infUser {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      font-size: 20px;
      font-weight: bold;
      color: var(--gray-5);
    }

    @media (max-width: 1020px) {
      width: 100%;
      max-width: 436.5px;
      justify-content: space-evenly;
      gap: 30px;
    }
  }
  .logout {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  a {
    :hover {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }
`;
export const StyleMain = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 10px;

  padding-top: 100px;

  @media (max-width: 1122px) {
    justify-content: center;
    padding-top: 50px;
    gap: 15px;
  }
  .asideProfile {
    position: relative;
    width: 100%;
    max-width: 300px;

    height: 360px;
    padding: 5px;

    border-radius: 8px;
    border: 1px solid var(--gray-3);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .EditButtonUser {
      width: 25px;
      height: 25px;
      cursor: pointer;
      position: absolute;
      top: 5%;
      right: 5%;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    .divUserInfo {
      width: 100%;
      height: 100px;

      padding: 5px;
      box-sizing: border-box;
      background: var(--gray-1);
      border: 1px solid var(--gray-3);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      gap: 20px;
    }
  }

  .ListaUls {
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    max-width: 800px;

    position: relative;

    @media (max-width: 1122px) {
      padding-top: 20px;
      gap: 10px;
    }

    .container {
      position: relative;
    }
    .containerNot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      position: absolute;
      top: 85px;

      gap: 25px;

      @media (max-width: 330px) {
        justify-content: center;
      }
      h3 {
        text-align: center;
        font-size: 20px;
      }
      span {
        font-size: 50px;
        rotate: calc(90deg);
      }
    }
    .containerTwo {
      position: relative;
    }
    .containerNotRead {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      position: absolute;
      top: 85px;
      gap: 25px;

      @media (max-width: 330px) {
        justify-content: center;
      }
      h3 {
        text-align: center;
        font-size: 20px;
      }
      span {
        font-size: 50px;
        rotate: calc(90deg);
      }
    }
  }

  ul {
    display: flex;
    gap: 20px;
    height: 350px;
    max-width: 1000px;
    width: 100%;
    background-color: var(--gray-1);
    border-radius: 8px;
    align-items: center;
    padding: 1rem;
    overflow-x: auto;

    .imgBook {
      width: 110px;
      height: 150px;
    }
  }
`;
