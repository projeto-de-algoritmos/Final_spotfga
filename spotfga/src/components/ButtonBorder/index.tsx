/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ButtonHTMLAttributes } from 'react';

import { CSSProperties } from 'styled-components';

import { Container, ButtonText } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  textColor?: string;
  textFontSize?: number;
  icon?: any;
  containerStyle?: CSSProperties;
};

const ButtonBorder: React.FC<ButtonProps> = ({
  children,
  containerStyle,
  textColor,
  textFontSize,
  icon,
  ...rest
}) => (
  <Container style={containerStyle} {...rest}>
    {icon}
    <ButtonText style={{ fontSize: textFontSize, color: textColor }}>
      {children}
    </ButtonText>
  </Container>
);

export default ButtonBorder;
