export const sqlUpdateTokenForgotPassword =
`
  UPDATE token_users_password SET
    token = $1,
    created_at = now(),
    updated_at = now()
  WHERE id_user = $2;
`
