export const sqlAddUser =
`
  INSERT INTO users (name, email, password, cpf, gender)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`
