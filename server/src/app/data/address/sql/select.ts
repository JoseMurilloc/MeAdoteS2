export const sqlListAddressByUser =
`
  SELECT a.id, a.state, a.city, a.district, a.street, a.number
  FROM addresses a
  JOIN users u on a.id = u.id_address
  WHERE u.id = $1;
`
