
export const sqlVerifyIfExistTokePassword =
`
  SELECT id_user FROM token_users_password WHERE id_user = $1;
`

export const sqlSelectTokenByPasswordForgot =
`
  SELECT id_user, created_at FROM token_users_password WHERE token = $1;
`
