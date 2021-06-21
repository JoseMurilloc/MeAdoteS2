export const sqlUpdateProfileAvatar =
`
  UPDATE users
  SET profile_avatar=$1
  WHERE id=$2;
`
