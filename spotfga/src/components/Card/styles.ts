import styled from 'styled-components';

interface ContainerProps {
  isList?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
