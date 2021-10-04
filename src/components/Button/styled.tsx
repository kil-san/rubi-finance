import styled, { css } from 'styled-components'

interface IStyledButton {
  size?: 'small' | 'default' | 'large'
}

export const StyledButton = styled.button.attrs({
  className: 'btn',
  type: "button"
})<IStyledButton>`
  ${({ theme, size }) => css`
    color: ${theme.color?.font?.secondary};
    background-color: ${theme.color?.background?.secondary};
    border-radius: 30px;
    ${size === 'large' && `padding: 2em 4em;`}
    ${(!size || size === 'small') && `padding: .5em 1em;`}
    ${size === 'default' && `padding: 1em 2em;`}

    &:hover {
      color: ${theme.color?.font?.secondary};
    }
  `}
`