import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
}

export const Container = styled.button<ButtonProps>`
  background: #8755ad;
  max-width: 294px;
  border: 2px solid #8755ad;
  border-radius: 74px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px 30px;

  &:hover {
    background-color: #6f4691;
    cursor: pointer;
  }
`;

export const ButtonText = styled.p`
  color: #fff;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.64px;
  align-items: center;
  display: flex;
  justify-content: center;
  /* width: 100%; */
`;
