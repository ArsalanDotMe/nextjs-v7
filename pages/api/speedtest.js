
const MBs = 200

const URL = `https://speed.cloudflare.com/__down?bytes=${MBs * 1024 * 1024}`

export default async function handler(req, res) {
  const start = new Date()

  const response = await fetch(URL)
  const blob = await response.blob()

  const end = new Date()
  const duration = end - start

  const blobMBs = blob.size / (1024 * 1024)

  res.status(200).json({
    duration: duration,
    size: `${blobMBs.toFixed(2)} MB`,
    speed: `${(blobMBs / (duration / 1000 )).toFixed(2)} MB/s`,
  })
}