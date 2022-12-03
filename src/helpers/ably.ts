import Ably from 'ably/promises'

export default new Ably.Realtime.Promise({
  authUrl:
    'https://mysterious-stream-82183.herokuapp.com/https://unlonely.app/api/createTokenRequest',
})
