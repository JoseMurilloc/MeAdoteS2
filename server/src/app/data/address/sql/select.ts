export const sqlListAddressByUser =
`
  SELECT a.id, a.state, a.city, a.district, a.street, a.number
  FROM users
  JOIN addresses a on users.id_address = a.id
  WHERE users.id = $1;
`
