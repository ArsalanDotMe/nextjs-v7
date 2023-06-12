// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  // Log whatever is recieved in the query param 'log'
  if (req.query.log) console.log('log: ' + req.query.log)

  const messages = [
    'will log 3 more messages',
    '你好，世界',
    'leroy jenkins',
    'مرحبا بالعالم',
  ]
  messages.forEach((message) => console.log(message))

  res.status(200).json({ messages: messages })
}
