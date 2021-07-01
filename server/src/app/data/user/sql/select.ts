export const sqlSelectUser =
  `
    SELECT name, cpf, email, profile_avatar, contact_whatsapp
    FROM users WHERE id=$1 LIMIT 1;
  `

export const sqlSelectByEmail =
  `
    SELECT id, name, password, email, profile_avatar
    FROM users WHERE email=$1
  `

export const sqlVerifyIfExistTokePassword =
`
  SELECT id_user FROM token_users_password WHERE id_user = $1;
`

export const sqlSelectTokenByPasswordForgot =
`
  SELECT id_user, created_at FROM token_users_password WHERE token = $1;
`
