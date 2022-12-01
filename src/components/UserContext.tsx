import { ApolloError, useQuery } from '@apollo/client'
import { useAccount } from 'wagmi'
import ChildrenProp from 'models/ChildrenProp'
import User from 'models/User'
import UserContext from 'helpers/UserContext'
import userQuery from 'helpers/userQuery'

export default function ({ children }: ChildrenProp) {
  const { address, isConnected } = useAccount()
  const value = { loading: false } as {
    user?: User
    loading: boolean
    error?: ApolloError
  }
  if (isConnected && address) {
    const { data, loading, error } = useQuery(userQuery, {
      variables: { data: { address } },
    })
    value.user = data?.getUser
    value.loading = loading
    value.error = error
  } else {
    value.user = undefined
    value.loading = false
    value.error = undefined
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
