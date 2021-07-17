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

export const sqlUpdatePasswordUser =
`
  UPDATE users
  SET password=$1
  WHERE id=$2;
`

export const sqlAddAddressByUser =
`
  UPDATE users
  SET id_address = $1
  WHERE id = $2;
`

