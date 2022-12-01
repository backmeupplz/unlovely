import { ApolloProvider } from '@apollo/client'
import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'
import UserContext from 'components/UserContext'
import apolloClient from 'helpers/apolloClient'
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
        <ApolloProvider client={apolloClient}>
          <UserContext>
            <Root>
              <MainBlock />
            </Root>
          </UserContext>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
