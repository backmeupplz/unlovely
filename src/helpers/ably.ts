import Ably from 'ably/promises'

export default new Ably.Realtime.Promise({
  authUrl: 'https://unlonely.all/api/createTokenRequest',
})
