import {
  classnames,
  container,
  height,
  margin,
  maxHeight,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('p-4'),
  maxWidth('max-w-7xl'),
  height('h-screen'),
  maxHeight('max-h-screen')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
