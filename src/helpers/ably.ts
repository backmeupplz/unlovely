import Ably from 'ably/promises'

export default new Ably.Realtime.Promise({
  authUrl:
    'https://ancient-journey-82291.herokuapp.com/https://unlonely.app/api/createTokenRequest',
})
