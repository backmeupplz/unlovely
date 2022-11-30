import { LogoText } from 'components/Text'
import Player from 'components/Player'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  space('space-y-2')
)
export default function () {
  return (
    <div className={container}>
      <LogoText>Unlovely</LogoText>
      <Player />
    </div>
  )
}
