import styled from "styled-components";

export const Licard = styled.li`
  min-width: 200px;
  width: 200px;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .divInfoBO {
    width: 100%;
    height: 90px;
    
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
    border-top: 2px solid var(--gray-3);
    
    gap: 5px;
    
    padding: 0 10px;
    p {
      font-weight: 700;
      font-size: 1rem;

      line-height: 1.8125rem;

      color: var(--gray-5);
      width: 100%;

      text-align: center;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btnRemove{
      color: red;
      :hover{
        text-decoration: underline;
      }
    }
  }

  text-align: center;

  gap: 15px;

  border-radius: 8px;
  border: 0.5px solid var(--gray-3);

  background-color: var(--white);

  button {
    background-color: var(--white);
  }
`;
