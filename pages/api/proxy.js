export default async function handler(req, res) {
  const responseSize = parseInt(req.query.size) || 1024
  const contentType = req.query.contentType || 'text/plain'
  const responseText = 'x'.repeat(responseSize)
  const buff = Buffer.from(responseText)

  res.setHeader('Content-Type', contentType)
  
  res.send(buff)
}