export const sqlVerifyIfExistAdopt =
`
  SELECT * FROM pet_user as adopts WHERE id_user = $1 AND id_pet = $2
`

export const sqlSelectAllMyAdopts =
`
  SELECT p.name, p.age, p.gender, p.description, pu.receive, pu.date_receive
  FROM pet_user pu
  JOIN pets p ON p.id = pu.id_pet
  JOIN users u ON pu.id_user = u.id
  WHERE u.id = $1;
`
