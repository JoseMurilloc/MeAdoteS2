import R from 'ramda'

export function handleFilenameForUrl(filenames: string[]): string[] {
  const newUrl = (u: string) => `http://localhost:3333/files/${u}`
  return R.map(newUrl, filenames)
}
