export const sqlSelectUser =
  `
    SELECT name, cpf, email, profile_avatar, contact_whatsapp
    FROM users WHERE id=$1 LIMIT 1;
  `

export const sqlSelectByEmail =
  `SELECT id, name, password, email, profile_avatar FROM users WHERE email=$1`
