import styled, { css } from 'styled-components'

export const StyledContainer = styled.div.attrs(props => ({
  className: 'container'
}))`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  `}
`

export const StyledStatus = styled.div<{ connected?: boolean }>`
  ${({ theme, connected }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
    justify-content: center;
    border-radius: 50%;
    background: ${connected ? 'limegreen' : 'red'};
    width: 30vh;
    margin: 4em 0;
    color: white;
  `}
`