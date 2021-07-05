export const sqlUploadPhotoOfPet =
`
  INSERT INTO
    photos(filename, id_pet)
    VALUES(ARRAY [$1, $2, $3, $4], $5) RETURNING *
`


