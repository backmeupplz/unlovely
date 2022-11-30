import { BodyText } from 'components/Text'
import {
  VideoJSIVSTech,
  VideoJSQualityPlugin,
  registerIVSQualityPlugin,
  registerIVSTech,
} from 'amazon-ivs-player'
import { useEffect, useState } from 'preact/hooks'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  minHeight,
} from 'classnames/tailwind'
import videojs from 'video.js'

registerIVSTech(videojs, {
  wasmBinary: '/aws-player/amazon-ivs-wasmworker.min.wasm',
  wasmWorker: '/aws-player/amazon-ivs-wasmworker.min.js',
})
registerIVSQualityPlugin(videojs)
const stream =
  'https://0ef8576db087.us-west-2.playback.live-video.net/api/video/v1/us-west-2.500434899882.channel.8e2oKm7LXNGq.m3u8'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-start')
)
export default function () {
  const [errorPlaying, setErrorPlaying] = useState('')
  useEffect(() => {
    const player = videojs(
      'videojs-player',
      {
        techOrder: ['AmazonIVS'],
        autoplay: true,
      },
      () => {
        player.src(stream)
        player.enableIVSQualityPlugin()
      }
    ) as videojs.Player & VideoJSIVSTech & VideoJSQualityPlugin

    const ivsPlayer = player.getIVSPlayer()
    ivsPlayer.addEventListener(
      player.getIVSEvents().PlayerEventType.ERROR,
      ({ message }) => {
        setErrorPlaying(message)
      }
    )
  }, [])
  return (
    <div className={container}>
      <video
        id="videojs-player"
        className="video-js vjs-fluid vjs-big-play-centered"
        controls
        autoPlay
        playsInline
        style={{
          padding: '0px',
          height: '100%',
          width: '100%',
        }}
      />
      {!!errorPlaying && <BodyText>{errorPlaying} — is stream on?</BodyText>}
    </div>
  )
}
