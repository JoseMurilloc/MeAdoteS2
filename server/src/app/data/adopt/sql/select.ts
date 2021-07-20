export const sqlVerifyIfExistAdopt =
`
  SELECT * FROM pet_user as adopts WHERE id_user = $1 AND id_pet = $2
`

export const sqlSelectAllMyAdopts =
`
  SELECT
    p.id, p.name, p.age, p.gender, p.description, pu.receive,
    pu.date_receive, p2.filename[1]
  FROM pet_user pu
  JOIN pets p ON p.id = pu.id_pet
  JOIN users u ON pu.id_user = u.id
  LEFT JOIN photos p2 ON p.id = p2.id_pet
  WHERE u.id = $1;
`
