export const sqlSelectPetById =
`
  SELECT * FROM pets WHERE id = $1
`

export const sqlSelectAllPets =
`
  SELECT
      p2.id, p2.name, p2.age, p2.castrated,
      s2.name as specie, s.category, p2.gender, p2.description,
      p.filename as photos
    FROM photos p RIGHT JOIN pets p2 on p2.id = p.id_pet
    RIGHT JOIN sizes s on p2.id_size = s.id
    RIGHT JOIN species s2 on p2.id_specie = s2.id
    WHERE p2.reservation_status = false AND s2.name = $1
    LIMIT 30
    OFFSET ($2-1)*30;
`

export const sqlCheckExistFavoritesByPet =
`
  SELECT * FROM favorites WHERE id_pet = $1 AND id_user = $2
`



