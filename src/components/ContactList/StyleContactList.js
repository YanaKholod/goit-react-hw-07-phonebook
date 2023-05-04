import styled from 'styled-components';

export const Styled = {
  List: styled.ul`
    padding: 0;
  `,
  Item: styled.li`
    display: flex;
    gap: 20px;
    width: 300px;
    justify-content: space-between;
    margin-bottom: 8px;
  `,
  Button: styled.button`
    justify-content: flex-end;
    background-color: white;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1px 10px;
    :hover {
      background: rgb(240, 240, 240);
    }
  `,
  Number: styled.span`
    font-weight: 600;
  `,
};
