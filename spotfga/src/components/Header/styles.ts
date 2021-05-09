import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: rgb(73, 44, 68);
  background: linear-gradient(
    90deg,
    rgba(73, 44, 68, 1) 0%,
    rgba(53, 68, 87, 1) 100%
  );

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #fff;
  }

  &:hover {
    background-color: #ffffff24;
  }
`;
