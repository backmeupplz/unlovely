import { BodyText } from 'components/Text'
import { useEffect, useRef, useState } from 'preact/hooks'
import ChatForm from 'components/ChatForm'
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
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollEnabled) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, scrollEnabled])
  useEffect(() => {
    const current = chatContainerRef.current
    const handleScroll = () => {
      if (current) {
        const { scrollTop, scrollHeight, clientHeight } = current
        const scrollBottom = scrollHeight - scrollTop - clientHeight
        setScrollEnabled(scrollBottom < 1)
      }
    }
    current?.addEventListener('scroll', handleScroll)
    return () => {
      current?.removeEventListener('scroll', handleScroll)
    }
  }, [chatContainerRef])
  return (
    <div className={container}>
      <BodyText>Chat:{loading && ' (loading...)'}</BodyText>
      <div className={chatContainer} ref={chatContainerRef}>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatForm />
    </div>
  )
}
