export const sqlListAllIdByPetsFavorites =
`
  SELECT u.name, array_agg(p.id) FROM favorites f
  JOIN pets p on p.id = f.id_pet
  JOIN users u on f.id_user = u.id
  JOIN species s on p.id_specie = s.id
  WHERE f.id_user = $1 AND s.name = $2
  GROUP BY u.name;
`

export const sqlListAllPetsFavorites =
`
  SELECT
  p2.id, p2.name, p2.age, p2.castrated,
  s2.name as specie, s.category, p2.gender, p2.description,
  p.filename as photos
  FROM photos p RIGHT JOIN pets p2 on p2.id = p.id_pet
  RIGHT JOIN sizes s on p2.id_size = s.id
  RIGHT JOIN species s2 on p2.id_specie = s2.id
  WHERE p2.reservation_status = false AND p2.id = ANY(ARRAY [$1]);
`


export const sqlIsFavoritePet =
`
  SELECT * FROM favorites WHERE id_user = $1 AND id_pet = $2;
`

