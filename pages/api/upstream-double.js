
export default async function handler(req, res) {
  // fetch response from upstream
  const responses = []

  responses.push(await (await fetch('https://api.github.com/repos/vercel/next.js')).json())

  responses.push(await (await fetch('https://api.github.com/repos/edgio/edgio')).json())

  res.status(200).json({ responses: responses })
}