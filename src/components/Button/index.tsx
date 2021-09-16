import React from 'react';
import { StyledButton } from './styled'
import { ICardProps } from './types'

const Button: React.FC<ICardProps> = (...props) => {
  return (
    <StyledButton {...props}>Primary</StyledButton>
  )
}

export default Button;
