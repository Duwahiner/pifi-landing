import axios from 'axios'

export const postSubscriptions = (email) => {
  return axios({
    method: 'post',
    url: `/api/subscription`,
    data: {
      email
    }
  })
}

