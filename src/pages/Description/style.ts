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
  padding-top: 50px;

  padding: 50px 10px 0px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  .container-infos {
    width: 100%;
    max-width: 935px;
    display: flex;
    gap: 15px;

    @media (max-width: 815px) {
      flex-direction: column;

      align-items: center;
    }
    img {
      width: 100%;
      max-width: 330px;
      height: 490px;

      object-fit: cover;
      overflow: hidden;
    }
  }
  .container-dados {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .divInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 394px) {
        align-items: center;
        justify-content: center;

        gap: 15px;
      }
    }
    .infor-one {
      display: flex;
      flex-direction: column;

    
      h2 {
        font-weight: 700;
        font-size: 25px;
        line-height: 58px;
        color: var(--gray-5);
        height: 50px;
      }
      .divCate {
        display: flex;
        gap: 5px;

        align-items: center;
        justify-content: center;

        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: var(--gray-5);
        }
      }
    }

    .divRanking{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     
     gap: 5px;
     
     padding-top: 20px;
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 29px;
      color: var(--gray-5);

      text-align: justify;
    }
    .container-button {
      display: flex;
      justify-content: center;

      gap: 10px;

      button {
        width: 156px;
        height: 55px;

        border-radius: 8px;
        background-color: white;

        font-weight: 700;
        font-size: 20px;
        line-height: 29px;

        border: 0.5px solid var(--color-secondary);
        :hover {
          background-color: var(--color-secondary);
          color: var(--white);
          transition: 0.3s ease;
        }
      }
      .btnLi {
        border: 0.5px solid var(--color-primary);
        :hover {
          background-color: var(--color-primary);
          color: var(--white);
          transition: 0.3s ease;
        }
      }
    }
  }
`;
export const StyleSecinpu = styled.section`
  width: 100%;
  max-width: 935px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 15px;

  border: 1px solid var(--gray-2);
  border-radius: 8px;
  background: var(--gray-1);

  h2 {
    font-weight: 700;
    font-size: 27px;
    line-height: 39px;
    color: var(--gray-5);
  }
  .divTextArea {
    width: 100%;
    height: 122px;
    background-color: green;

    position: relative;

    border: 1px solid var(--gray-4);
    background-color: white;
    border-radius: 8px;

    textarea {
      width: 100%;
      height: 100%;

      padding: 15px 100px 15px 15px;

      border-radius: 8px;
      border: none;
      resize: none;
      text-align: start;
    }
    button {
      padding: 15px 20px;

      position: absolute;
      right: 15px;
      top: 70px;

      font-weight: bold;

      color: var(--gray-1);
      background: var(--color-primary);
      border-radius: 8px;

      :hover {
        background-color: var(--color-primary-50);
      }
    }
  }
`;

export const StyleSecComents = styled.section`
  width: 100%;
  max-width: 935px;

  padding: 15px;

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: var(--gray-5);
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 15px;
    padding-top: 30px;
  }
  li {
    max-width: 800px;
    display: flex;
    gap: 15px;

    padding: 30px 10px 30px 10px;
    border-bottom: 3px solid var(--gray-3);

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .testeDiv {
      h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: var(--color-primary-50);
      }
      p {
        width: 100%;
        max-width: 800px;

        font-weight: 400;
        font-size: 18px;
        line-height: 24px;

        color: var(--gray-5);
      }
    }
  }
  .containerComent {
    display: flex;
    flex-wrap: wrap;

    border: 1px solid var(--gray-3);
    justify-content: center;
    gap: 15px;
    background-color: var(--gray-1);

    padding: 10px 0;

    h3 {
      text-align: center;
      font-size: 20px;
    }
    span {
      font-size: 25px;
      rotate: calc(90deg);
    }
  }
`;
