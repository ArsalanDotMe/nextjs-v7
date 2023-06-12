
export default async function handler(req, res) {
  // fetch response from upstream
  const responses = []

  responses.push(await (await fetch('https://api.github.com/repos/vercel/next.js')).json())

  res.status(200).json({ responses: responses })
}