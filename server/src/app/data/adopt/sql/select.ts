export const sqlVerifyIfExistAdopt =
`
  SELECT * FROM pet_user as adopts WHERE id_user = $1 AND id_pet = $2
`

export const sqlSelectAllMyAdopts =
`
  SELECT p.id, p.name, p.age, p.gender, p.description
  FROM pet_user
  JOIN pets p ON p.id = pet_user.id_pet
  JOIN users u ON pet_user.id_user = u.id
  WHERE u.id = $1;
`
