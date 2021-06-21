import { verify } from 'jsonwebtoken'
import authConfig from '../../config/auth'
import { Request, Response, NextFunction } from 'express'

interface TokenPayload {
  name: string;
  iat: number;
  exp: number;
  sub: string;
  profile_avatar?: string;
}

export default async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token invalid' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.secret)

    const { sub, name, profile_avatar } = decoded as TokenPayload

    req.user = {
      id: sub,
      name,
      profile_avatar
    }

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' })
  }
}
