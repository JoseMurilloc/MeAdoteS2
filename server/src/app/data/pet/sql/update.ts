export const sqlUpdatePhotosOfPets =
`
  UPDATE photos
  SET filename = ARRAY[$1, $2, $3, $4]
  WHERE id_pet = $5
  RETURNING filename
`

