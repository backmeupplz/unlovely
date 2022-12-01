import { BodyText, Link, LogoText } from 'components/Text'
import { ConnectButton } from '@rainbow-me/rainbowkit'
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
  maxHeight,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4'),
  height('h-full'),
  maxHeight('max-h-full')
)
const logoContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  maxHeight('max-h-full')
)
const innerContainer = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4'),
  flexGrow('grow'),
  maxHeight('max-h-full')
)
const visibleUnderMd = display('flex', 'md:hidden')
const hiddenUnderMd = display('hidden', 'md:flex')
export default function () {
  return (
    <div className={container}>
      <div className={classnames(logoContainer, hiddenUnderMd)}>
        <LogoText>Unlovely</LogoText>
        <ConnectButton showBalance={false} />
      </div>
      <div className={innerContainer}>
        <div className={classnames(logoContainer, visibleUnderMd)}>
          <LogoText>Unlovely</LogoText>
          <ConnectButton showBalance={false} />
        </div>
        <Player />
        <Chat />
      </div>
      <div className={hiddenUnderMd}>
        <BodyText>
          Made with love by <Link href="https://bdut.ch">@borodutch</Link>,
          Unlovely is{' '}
          <Link href="https://github.com/backmeupplz/unlovely/">
            open source
          </Link>
          !
        </BodyText>
      </div>
    </div>
  )
}
