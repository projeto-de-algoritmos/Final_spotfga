import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  isChecked?: boolean;
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  background: transparent;
  color: #000;

  width: 100%;
  margin-bottom: 12px;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;

      .radio {
        border-color: #c53030;
      }
    `}

  /* Se o input estiver focado, mude a cor do icone e da borda. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFocused &&
    css`
      color:   border: 1px solid #e4007d;
      border-color:   border: 1px solid #e4007d;
    `}

  /* Se o input estiver preenchido, mude a cor do icone. A cor do icone esta conectado com color */
  ${(props) =>
    props.isFilled &&
    css`
      color:   border: 1px solid #e4007d;
    `}

  ${(props) =>
    props.isChecked &&
    css`
      .radio {
        transition: all 200ms ease-in-out;
        background-color: #313131;
      }
    `};

  .radio {
    margin-right: 7px;
    width: 21px;
    height: 21px;
    min-width: 21px;
    min-height: 21px;
    border: 1px solid #313131;
    border-radius: 50%;
  }

  p {
    font-family: 'Poppins';
    font-size: 14px;
    letter-spacing: 0.28px;
    font-weight: 400;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 3.2rem;
  }

  input {
    appearance: none;
  }

  /* input:checked {
  } */
`;
