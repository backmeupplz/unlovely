import { Types } from 'ably'
import { useEffect, useState } from 'preact/hooks'
import ablyChannel from 'helpers/ablyChannel'

export default function () {
  const [messages, setMessages] = useState<Types.Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAndSubscribe() {
      const channel = ablyChannel
      const messages = await channel.history({ limit: 200 })
      setMessages(messages.items.reverse())
      setLoading(false)
      await channel.subscribe((message) => {
        setMessages((messages) => [
          ...messages.slice(messages.length - 200, messages.length),
          message,
        ])
      })
    }
    void fetchAndSubscribe()
    return ablyChannel.unsubscribe()
  }, [])

  return { messages, loading }
}
