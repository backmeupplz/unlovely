import { useContext } from 'preact/hooks'
import UserContext from 'helpers/UserContext'

export default function () {
  const { user, loading, error } = useContext(UserContext)
  return <></>
}
