
export const sqlCreateTokenForgotPassword =
`
  INSERT INTO token_users_password
    (id_user, token)
    VALUES($1, $2)
`

export const sqlFindByForgotPasswordTokenUser =
`
  SELECT id_user FROM token_users_password WHERE id_user = $1
`
