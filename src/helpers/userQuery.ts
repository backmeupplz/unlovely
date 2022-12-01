import { gql } from '@apollo/client'

export default gql`
  query getUser($data: GetUserInput!) {
    getUser(data: $data) {
      address
      username
      signature
      bio
      powerUserLvl
      videoSavantLvl
      FCImageUrl
      isFCUser
    }
  }
`
