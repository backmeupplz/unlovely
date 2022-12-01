import { createClient } from 'wagmi'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import chainConfig from 'helpers/chainConfig'

const { chains, provider } = chainConfig

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

export default createClient({
  autoConnect: true,
  connectors,
  provider,
})
