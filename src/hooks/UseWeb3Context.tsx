import React, { useCallback, useEffect, useState } from 'react'
import { Web3Provider } from 'context'
import Web3 from 'web3'

interface IUseWeb3Context {}

const UseWeb3Context: React.FC<IUseWeb3Context> = ({ 
  children
}) => {
  const [web3, setWeb3] = useState<Web3>()
  const [hasPerm, setHasPerm] = useState(false)

  const init = useCallback(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum))
    } else if (window.web3) {
      setWeb3(new Web3(window.web3.currentProvider))
      setHasPerm(true)
    } else {
      const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
      setWeb3(new Web3(provider))
      setHasPerm(true)
    }
  }, [])

  useEffect(() => {
    init()
  }, [init])

  const requestAccess = async (): Promise<any> => {
    if (!web3) {
      init()
    }

    try {
      await window.ethereum.enable()
      setHasPerm(true)
      return Promise.resolve()
    } catch(error: any) {
      alert(error?.message)
      return Promise.reject(error)
    }
  }

  return (
    <Web3Provider
      value={{
        web3,
        hasPerm,
        setWeb3,
        requestAccess
      }}
    >
      {children}
    </Web3Provider>
  )
}

export default UseWeb3Context