import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'
import chainConfig from 'helpers/chainConfig'
import wagmiClient from 'helpers/wagmiClient'

export default function () {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chainConfig.chains}
        theme={midnightTheme({
          ...midnightTheme.accentColors.purple,
        })}
      >
        <Root>
          <MainBlock />
        </Root>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
