// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export default async function handler(req, res) {
  console.log('Going to sleep for 500ms')
  await sleep(500)
  console.log('Woke up after 500ms')

  res.status(200).json({ messages: ['Hello from slow-origin'] })
}
