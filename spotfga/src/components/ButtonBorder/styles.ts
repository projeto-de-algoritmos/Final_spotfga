import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
}

export const Container = styled.button<ButtonProps>`
  background: transparent;
  border-width: 1;
  border-radius: 20px;
  border-color: #ff9a00;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;
`;

export const ButtonText = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: 0.64px;
  align-items: center;
  display: flex;
  justify-content: center;
  /* width: 100%; */
`;
