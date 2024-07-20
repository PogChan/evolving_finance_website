import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Cors
export const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  origin: ['https://studio.apollographql.com', process.env.SITE_URL || ''],
})

// Cors middleware
export const corsMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
