import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 80px;
  padding: 0 80px 0 80px;
  background: var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;

  @media (max-width: 584px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 257px;
    height: 48px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 584px) {
      width: 100%;
      justify-content: space-evenly;
    }
    a {
      font-weight: bold;
      :hover {
        color: var(--color-primary);
      }
    }
  }
  .btnLogin {
    background-color: var(--color-primary);
    color: var(--gray-1);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;

    :hover {
      background-color: var(--color-primary-50);
    }
  }
`;
