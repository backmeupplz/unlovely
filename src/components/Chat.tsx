import { BodyText } from 'components/Text'
import { useEffect, useRef } from 'preact/hooks'
import Message from 'components/Message'
import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  overflow,
  padding,
  width,
} from 'classnames/tailwind'
import useMessages from 'hooks/useMessages'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-stretch'),
  gap('gap-3'),
  borderColor('border-indigo-900'),
  borderWidth('border'),
  width('md:w-1/2', 'lg:w-1/3'),
  padding('p-3'),
  borderRadius('rounded'),
  height('h-1/2', 'md:h-96')
)
const chatContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-2'),
  overflow('overflow-y-scroll')
)
export default function () {
  const { messages, loading } = useMessages()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  return (
    <div className={container}>
      <BodyText>Chat:{loading && ' (loading...)'}</BodyText>
      <div className={chatContainer}>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
