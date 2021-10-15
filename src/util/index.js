import axios from 'axios'

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
