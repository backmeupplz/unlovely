import { BodyText } from 'components/Text'
import classnames, {
  borderColor,
  borderRadius,
  borderWidth,
  display,
  height,
  padding,
  width,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  borderColor('border-indigo-900'),
  borderWidth('border'),
  width('md:w-1/3', 'lg:w-1/4'),
  padding('p-3'),
  borderRadius('rounded'),
  height('h-1/2', 'md:h-96')
)
export default function () {
  return (
    <div className={container}>
      <BodyText>hi there</BodyText>
    </div>
  )
}
