import {
  classnames,
  container,
  height,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'pt-4', 'px-4'),
  maxWidth('max-w-7xl'),
  height('h-screen', 'md:h-auto')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
