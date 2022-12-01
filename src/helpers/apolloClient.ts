import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://unlonely-vqeii.ondigitalocean.app/graphql',
  }),
})
