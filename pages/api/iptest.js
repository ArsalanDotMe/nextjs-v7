

export default async function handler(req, res) {
  // Check the public IP address of the server by
  // making a request to a public IP address API
  
  const ipAPI = 'https://api.ipify.org?format=json'

  const response = await fetch(ipAPI)
  const data = await response.json()
  const ip = data.ip

  res.status(200).json({ ip: ip })  
}