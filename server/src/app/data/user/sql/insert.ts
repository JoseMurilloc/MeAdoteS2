export const sqlAddUser =
`
  INSERT INTO users
    (name, cpf, email, password, gender, contact_whatsapp)
    VALUES($1, $2, $3, $4, $5, $6)
`
