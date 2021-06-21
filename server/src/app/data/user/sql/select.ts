export const sqlSelectUser =
  `
    SELECT name, email, profile_avatar
    FROM users WHERE id=$1 LIMIT 1;
  `

export const sqlSelectByEmail =
  `SELECT id, name, password, email FROM users WHERE email=$1`
