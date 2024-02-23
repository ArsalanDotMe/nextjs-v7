import axios from 'axios'

export default async function handler(req, res) {
  // fetch response from upstream
  const responses = []

  responses.push(await (await axios.get('https://reqres.in/api/users?page=2')).data)
  responses.push(await (await axios.get('https://reqres.in/api/users?page=4')).data)

  res.status(200).json({ responses: responses })
}