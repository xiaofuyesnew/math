import axios from 'axios'
import Qs from 'qs'

export const request = {
  get: (param) =>
    new Promise((resolve, reject) => {
      axios(param)
        .then((res) => {
          console.log(res)
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    }),
  post: (param) =>
    new Promise((resolve, reject) => {
      axios({
        ...param,
        method: 'post',
        transformRequest: [(data) => Qs.stringify(data)],
      })
        .then((res) => {
          console.log(res)
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    }),
}

export default {
  request,
}
