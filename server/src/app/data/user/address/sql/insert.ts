export const sqlCreateAddress =
`
  INSERT INTO
    addresses (state, city, district, street, number)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
`
