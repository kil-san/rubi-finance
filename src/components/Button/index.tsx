import React from 'react';
import { StyledButton } from './styled'
import { IButtonProps } from './types'

const Button: React.FC<IButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <StyledButton {...props as any}>{children}</StyledButton>
    </>
  )
}

export default Button
