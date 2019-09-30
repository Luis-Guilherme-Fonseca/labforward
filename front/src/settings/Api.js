

const base = 'http://localhost:4000/'

export default function API(config) {
  const {
    path,
    method,
    headers,
    data
  } = config

  const url = base + path

  return fetch(url, {
    method,
    body: data,
    headers
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err)
      // if (err.response) {
      //   throw (err.response.data)
      // } else {
      //   throw (err.message)
      // }
    })
}