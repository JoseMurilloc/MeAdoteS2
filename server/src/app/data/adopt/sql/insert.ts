export const sqlCreateAdopt =
`
  INSERT INTO pet_user (id_user, id_pet, date_receive)
  VALUES($1, $2, $3);
`
