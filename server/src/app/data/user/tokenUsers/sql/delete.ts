export const sqlDeleteTokenByUserId =
`
  DELETE FROM token_users_password
  WHERE id_user=$1;
`
