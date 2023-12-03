import imageUrlBuilder from '@sanity/image-url'

export const sanityUrlBuilder = (sanityClient, source) => {
  const builder = imageUrlBuilder(sanityClient)
  return builder.image(source).url()
}

export const cleanUrl = (url) => {
  return url?.split('https://www.')[1]
}
