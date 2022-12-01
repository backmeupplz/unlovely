import { ApolloError } from '@apollo/client'
import { createContext } from 'preact'
import User from 'models/User'

export default createContext<{
  user?: User
  loading: boolean
  error?: ApolloError
}>({
  loading: false,
})
