import * as linkify from 'linkifyjs'
import { BodyText, Link } from 'components/Text'
import { Types } from 'ably'
import Linkify from 'linkify-react'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  padding,
} from 'classnames/tailwind'
import isDarkColor from 'helpers/isDarkColor'
import shortify from 'helpers/shortify'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-stretch')
)
const pill = (isDark: boolean) =>
  classnames(
    display('inline'),
    padding('px-1'),
    borderRadius('rounded'),
    backgroundColor(isDark ? 'bg-indigo-300' : 'bg-indigo-900')
  )
export default function ({ message }: { message: Types.Message }) {
  if (message.name !== 'chat-message') {
    return null
  }
  const urls = linkify
    .find(message.data.messageText)
    .filter((u) => u.type === 'url')
  return (
    <div className={container}>
      <BodyText>
        <div className={pill(isDarkColor(message.data.chatColor))}>
          <span style={{ color: message.data.chatColor || undefined }}>
            {message.data.username || shortify(message.data.address)}
          </span>
        </div>
        :{' '}
        <Linkify
          options={{
            defaultProtocol: 'https',
            render: ({ attributes: { href }, content }) => {
              return <Link href={href}>{content}</Link>
            },
          }}
        >
          {message.data.messageText}
        </Linkify>
      </BodyText>
    </div>
  )
}
