export default async function handler(req, resp) {
  const responseText = "This is some text."
  const buff = Buffer.from(responseText)

  resp.setHeader('Content-Type', 'plain/text')
  resp.setHeader('Content-Transfer-Encoding', 'binary')
  resp.setHeader('Content-Length', buff.length)
  resp.setHeader('Content-Disposition', 'attachment; filename="test.txt"')

  resp.send(buff)
  return
}