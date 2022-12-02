import { BodyText } from 'components/Text'
import { useEffect, useRef, useState } from 'preact/hooks'
import ChatForm from 'components/ChatForm'
import Message from 'components/Message'
import classnames, {
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  flexGrow,
  gap,
  height,
  inset,
  justifyContent,
  overflow,
  padding,
  position,
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
  height('h-1/2', 'md:h-full')
)
const chatContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-2'),
  overflow('overflow-y-scroll'),
  flexGrow('grow'),
  position('relative')
)
const messagesContainer = classnames(position('absolute'), inset('inset-0'))
const messageContanier = classnames(
  padding('py-1', 'px-2'),
  backgroundColor('bg-indigo-900'),
  borderRadius('rounded')
)
export default function () {
  const { messages, loading } = useMessages()
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  // const chatContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollEnabled) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, scrollEnabled])
  // useEffect(() => {
  //   const current = chatContainerRef.current
  //   const handleScroll = () => {
  //     if (current) {
  //       const { scrollTop, scrollHeight, clientHeight } = current
  //       const scrollBottom = scrollHeight - scrollTop - clientHeight
  //       setScrollEnabled(scrollBottom < 1)
  //     }
  //   }
  //   current?.addEventListener('scroll', handleScroll)
  //   return () => {
  //     current?.removeEventListener('scroll', handleScroll)
  //   }
  // }, [chatContainerRef])
  return (
    <div className={container}>
      <div className={messageContanier}>
        <BodyText>Chat:{loading && ' (loading...)'}</BodyText>
      </div>
      <div className={chatContainer}>
        <div className={messagesContainer}>
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {!loading && <ChatForm />}
    </div>
  )
}
