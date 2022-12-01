import { ConnectButton } from '@rainbow-me/rainbowkit'
import { LogoText } from 'components/Text'
import Chat from 'components/Chat'
import Player from 'components/Player'
import classnames, {
  alignItems,
  display,
  flexDirection,
  flexGrow,
  gap,
  height,
  justifyContent,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4'),
  height('h-full')
)
const topContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center')
)
const bottomContainer = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4'),
  flexGrow('grow')
)
export default function () {
  return (
    <div className={container}>
      <div className={topContainer}>
        <LogoText>Unlovely</LogoText>
        <ConnectButton showBalance={false} />
      </div>
      <div className={bottomContainer}>
        <Player />
        <Chat />
      </div>
    </div>
  )
}
