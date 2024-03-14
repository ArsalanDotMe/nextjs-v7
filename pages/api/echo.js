// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    time: new Date().toISOString(),
    headers: req.headers,
    query: req.query,
    cookies: req.cookies,
    url: req.url,
    path: req.path || 'empty',
    pathname: req.pathname || 'empty',
    search: req.search || 'empty',
    query: req.query || 'empty',
    method: req.method || 'empty',
    body: req.body || 'empty',
    temp: {
      notFoundxRequestId: req.notFoundxRequestId,
      requestIdFromRequest: req.requestIdFromRequest,
    }
  })
}
