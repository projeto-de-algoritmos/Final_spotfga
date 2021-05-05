import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.button`
  width: 180px;
  height: 180px;
  background-color: #8755ad;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  box-shadow: 0 2px 7px #ffffff24;
  cursor: pointer;

  svg {
    fill: #fff;
  }

  &:hover {
    box-shadow: 3px 5px 15px #ffffff24;
    background-color: #6f4691;
  }
`;
