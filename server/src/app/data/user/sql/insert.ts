export const sqlAddUser =
`
  INSERT INTO users
    (name, cpf, email, password, contact_whatsapp)
    VALUES($1, $2, $3, $4, $5)
`

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

