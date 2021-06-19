export const sqlInsertPhone =
`
  INSERT INTO phones (number, id_user) values ($1, $2);
`
