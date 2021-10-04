import React, { useContext, useEffect } from 'react';
import { StyledContainer, StyledStatus } from './styled'
import { IDemoSectionProps } from './types'
import { Web3Context } from 'context'
import { Button } from 'components'

const DemoSectionProps: React.FC<IDemoSectionProps> = () => {
  const { web3, requestAccess, hasPerm } = useContext(Web3Context)

  useEffect(() => {
    if(web3 && hasPerm) {
      web3?.eth.getAccounts().then(data => console.log('========= acc', data))
    }
  }, [web3, hasPerm])

  return (
    <StyledContainer>
      <h1>Hello, Rubi!</h1>
      <StyledStatus connected={hasPerm}>
        <h2>{hasPerm ? 'Connected' : 'Disconnected'}</h2>
      </StyledStatus>
      <Button 
        disabled={hasPerm}
        onClick={requestAccess}
        size='large'
      >
        {hasPerm ? `You're already connected` : 'Connect'}
      </Button>
    </StyledContainer>
  )
}

export default DemoSectionProps
