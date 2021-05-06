import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  color: #fff;
  border-bottom: 1px solid #a86ad4;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ffffff24;
  }
`;
