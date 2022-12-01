import { BodyText } from 'components/Text'
import { Types } from 'ably'
import classnames, {
  backgroundColor,
  borderRadius,
  display,
  padding,
} from 'classnames/tailwind'
import isDarkColor from 'helpers/isDarkColor'

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
  return (
    <BodyText>
      <div className={pill(isDarkColor(message.data.chatColor))}>
        <span style={{ color: message.data.chatColor || undefined }}>
          {message.data.username ||
            `${message.data.address.slice(0, 6)}...${message.data.address.slice(
              -4
            )}`}
        </span>
      </div>
      : {message.data.messageText}
    </BodyText>
  )
}
