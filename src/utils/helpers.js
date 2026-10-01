export const cleanUrl = (url) => {
  return url?.split('https://www.')[1]
}
