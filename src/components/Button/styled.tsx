import styled, { css } from 'styled-components'

export const StyledButton = styled.button.attrs(props => ({
  className: 'btn',
  type: "button"
}))`
  ${({ theme }) => css`
    color: ${theme.color?.font?.secondary};
    background-color: ${theme.color?.background?.secondary};
    border-radius: 30px;

    &:hover {
      color: ${theme.color?.font?.secondary};
    }
  `}
`