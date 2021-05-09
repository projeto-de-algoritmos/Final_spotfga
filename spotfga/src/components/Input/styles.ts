import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 294px;
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 74px;
  border: 2px solid #8755ad;
  margin-bottom: 20px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030 !important;
    `}

  /* Se o input estiver focado, mude a cor do icone e da borda. A cor do icone esta conectado com color */
  /* ${(props) =>
    props.isFocused &&
    css`
      color: green;
      border-color: #ffdf22;
    `} */

  /* Se o input estiver preenchido, mude a cor do icone. A cor do icone esta conectado com color */
  /* ${(props) =>
    props.isFilled &&
    css`
      color: green;
      border-color: #ffdf22;
    `} */


  /* Icon Eye */
  > svg {
    stroke-width: 1px;
  }

  > input {
    flex: 1;
    width: 100%;
    background: transparent;
    border: 0;
    color: #000000;
    padding: 5px 20px;
    outline: none;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 5px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
