import ably from 'helpers/ably'
import ablyChannelName from 'helpers/ablyChannelName'

export default ably.channels.get(ablyChannelName)
