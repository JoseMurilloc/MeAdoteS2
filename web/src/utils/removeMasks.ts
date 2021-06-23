export function removeMasks(cpf: string, contact_whatsapp: string) {
  let cpfParserMask = cpf.replaceAll('.', '')
  cpfParserMask = cpfParserMask.replace('-', '')
 

  let contactParserMask = contact_whatsapp.replace('(', '')
  contactParserMask = contactParserMask.replace(')', '')
  contactParserMask = contactParserMask.replace(' ', '')
  contactParserMask = contactParserMask.replace('-', '')

  return { cpfParserMask, contactParserMask }
}