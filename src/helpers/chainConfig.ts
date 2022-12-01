import { chain, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export default configureChains([chain.mainnet], [publicProvider()])
