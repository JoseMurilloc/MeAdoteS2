export const sqlCancellationAdopt =
`
  DELETE FROM pet_user
  WHERE id_user = $1 AND id_pet = $2 AND receive = false
`

