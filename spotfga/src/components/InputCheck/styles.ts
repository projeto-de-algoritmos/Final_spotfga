import styled from 'styled-components';

interface ContainerProps {
  isChecked?: boolean;
}

export const Container = styled.label<ContainerProps>`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  vertical-align: middle;
  color: #444444;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  input[type='checkbox'] {
    display: none;
  }

  span {
    height: 20px;
    width: 20px;
    border-radius: 3px;
    background: #fff;
    border: 0.1rem solid #8e8e8e;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }

  span:after {
    content: '';
    height: 20px;
    width: 20px;
    background: #ff9a00;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 3px;
    transition: 300ms ease-in-out 0s;
  }

  input[type='checkbox']:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 3.2rem;
  }
`;
