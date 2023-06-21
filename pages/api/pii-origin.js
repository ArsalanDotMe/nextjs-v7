
export default async function handler(req, res) {
  // fetch response from upstream
  if (!process.env.HOSTED_URL) {
    res.status(500).json({ error: 'HOSTED_URL not set' })
    return
  }
  const responses = []

  responses.push(await (await fetch(`${process.env.HOSTED_URL}/api/pii-response`)).json())

  res.status(200).json({ responses: responses })
}