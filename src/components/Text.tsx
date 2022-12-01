import {
  backgroundClip,
  backgroundImage,
  classnames,
  fontSize,
  fontWeight,
  gradientColorStops,
  textColor,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const logoText = classnames(
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-gradient-to-bl'),
  gradientColorStops('from-slate-500', 'via-slate-400', 'to-violet-300'),
  fontSize('text-3xl'),
  fontWeight('font-bold')
)
export function LogoText({ children }: ChildrenProp) {
  return <p className={logoText}>{children}</p>
}

const bodyText = classnames(
  textColor('text-gray-300'),
  wordBreak('break-words')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
