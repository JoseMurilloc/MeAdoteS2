export const sqlDeleteFavoritePet =
`
  DELETE FROM
    favorites
  WHERE id_user = $1 and id_pet = $2
  RETURNING *;
`
