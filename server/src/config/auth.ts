export default {
  secret: String(process.env.AUTH_SECRET_KEY),
  expiresIn: process.env.AUTH_EXPIRES_IN
}
