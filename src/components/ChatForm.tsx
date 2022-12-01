import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import { BodyText } from 'components/Text'
import { ChangeEvent } from 'preact/compat'
import { useContext, useEffect, useState } from 'preact/hooks'
import TextareaAutosize from 'react-autosize-textarea'
import UserContext from 'helpers/UserContext'
import ablyChannel from 'helpers/ablyChannel'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  cursor,
  display,
  flexDirection,
  flexGrow,
  gap,
  height,
  justifyContent,
  opacity,
  outlineColor,
  outlineStyle,
  padding,
  textColor,
  width,
} from 'classnames/tailwind'
import randomcolor from 'randomcolor'
import reactions from 'helpers/reactions'
import shortify from 'helpers/shortify'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-start'),
  alignItems('items-start'),
  gap('gap-2')
)
const textArea = classnames(
  padding('px-2', 'py-1'),
  backgroundColor('bg-indigo-900'),
  borderRadius('rounded'),
  textColor('text-gray-300'),
  outlineColor('focus:outline-indigo-300'),
  outlineStyle('focus:outline-none'),
  flexGrow('grow')
)
const button = (disalbled: boolean) =>
  classnames(
    padding('p-1'),
    backgroundColor('bg-indigo-900', {
      'hover:bg-indigo-800': !disalbled,
      'active:bg-indigo-700': !disalbled,
    }),
    opacity({ 'opacity-50': disalbled }),
    borderRadius('rounded'),
    textColor('text-gray-300'),
    cursor(disalbled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer')
  )
const icon = classnames(
  height('h-6'),
  width('w-6'),
  textColor('text-indigo-300')
)
const messageContanier = classnames(
  padding('py-1', 'px-2'),
  backgroundColor('bg-indigo-900'),
  borderRadius('rounded'),
  flexGrow('grow')
)
export default function () {
  const { user, loading, error } = useContext(UserContext)
  const [text, setText] = useState('')
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid(text.length > 0)
  }, [text])
  function publishText() {
    setText('')
    if (!user) return
    void ablyChannel.publish({
      name: 'chat-message',
      data: {
        messageText: text,
        username: user.username,
        chatColor: randomcolor({
          luminosity: 'dark',
          seed: user.username || user.address,
        }),
        isFC: user.isFCUser,
        address: user.address,
        powerUserLvl: user.powerUserLvl,
        videoSavantLvl: user.videoSavantLvl,
        isGif: false,
        reactions,
      },
    })
  }
  if (user && !loading && !error) {
    return (
      <div className={container}>
        <TextareaAutosize
          value={text}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            if (e.currentTarget?.value.endsWith('\n')) {
              publishText()
              return
            }
            setText(e.currentTarget?.value.replace('\n', ''))
          }}
          className={textArea}
          maxRows={3}
          placeholder={`${user?.username || shortify(user?.address)} says...`}
        />
        <div
          className={button(!isValid)}
          onClick={() => {
            if (isValid) publishText()
          }}
        >
          <ArrowSmallRightIcon className={icon} />
        </div>
      </div>
    )
  }
  const message = error
    ? `Error: ${error}`
    : loading
    ? 'Loading...'
    : 'Please connect a wallet to chat!'
  return (
    <div class={container}>
      <div className={messageContanier}>
        <BodyText>{message}</BodyText>
      </div>
    </div>
  )
}
