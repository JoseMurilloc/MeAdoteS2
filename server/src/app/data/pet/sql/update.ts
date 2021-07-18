export const sqlUpdatePhotosOfPets =
`
  UPDATE photos
  SET filename = ARRAY[$1, $2, $3, $4]
  WHERE id_pet = $5
  RETURNING filename
`

export const sqlReservationTruePet =
`
  UPDATE pets
  SET reservation_status = true
  WHERE id = $1
  RETURNING *
`

export const sqlReservationPetLiberation =
`
  UPDATE pets
  SET reservation_status = false
  WHERE id = $1;
`
