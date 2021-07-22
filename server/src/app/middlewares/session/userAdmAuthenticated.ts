import { verify } from 'jsonwebtoken'
import authConfig from '../../../config/auth'
import { Request, Response, NextFunction } from 'express'
import  { UserData } from '../../data/user'

interface TokenPayload {
  name: string;
  iat: number;
  exp: number;
  sub: string;
  profile_avatar?: string;
}

const userData = new UserData()

export default async function userAdmAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token invalid' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.secret)

    const { sub } = decoded as TokenPayload

    const administrationValid = await userData.getUserAdministration(
      Number(sub)
    )

    if (!administrationValid) {
      throw new Error()
    }

    req.user = {
      id: sub,
    }

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' })
  }
}
