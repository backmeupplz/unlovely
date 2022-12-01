import { ConnectButton } from '@rainbow-me/rainbowkit'
import { LogoText } from 'components/Text'
import Player from 'components/Player'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4')
)
const topContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center')
)
export default function () {
  return (
    <div className={container}>
      <div className={topContainer}>
        <LogoText>Unlovely</LogoText>
        <ConnectButton showBalance={false} />
      </div>
      <Player />
    </div>
  )
}
