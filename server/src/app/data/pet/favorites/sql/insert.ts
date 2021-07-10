export const sqlFavoriteOfPet =
`
  INSERT INTO
    favorites (id_pet, id_user)
    VALUES ($1, $2);
`

export const sqlVerifyFavoriteExist =
`
  SELECT
    id_pet, id_user
    FROM favorites
    WHERE id_pet = $1 and id_user = $2;
`
