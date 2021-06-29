export const sqlUpdateProfileAvatar =
`
  UPDATE users
  SET profile_avatar=$1
  WHERE id=$2
  RETURNING profile_avatar;
`

export const sqlUpdateProfile = `
  UPDATE users
  SET name=$1, email=$2, contact_whatsapp=$3, cpf=$4
  WHERE id=$5
  RETURNING name, email, contact_whatsapp, cpf;
`

export const sqlUpdateTokenForgotPassword =
`
  UPDATE token_users_password SET
    token = $1,
    created_at = now(),
    updated_at = now()
  WHERE id_user = $2;
`
