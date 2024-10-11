// This file was automatically added by edgio deploy.
// You should commit this file to source control.
import { Router } from '@edgio/core/router'
import { nextRoutes } from '@edgio/next'

export default new Router()
  // NextRoutes automatically adds routes for all Next.js pages and their assets
  .use(nextRoutes)
  .match('/api/:path*', {
    caching: {
      bypass_cache: true,
      bypass_client_cache: true
    },
  })
  // .match('/api/echo', features => {
  //   features.proxy('edgio_serverless', {
  //     transformRequest: (request) => {
  //       request.url = request.rawUrl
  //     },
  //     transformResponse: (response) => {
  //       response.setHeader('x-some-header', 'this header was added by transformResponse')
  //     }
  //   })
  // })