export const Slide = ({ image }) => {
  if (!image) return null

  return (
    <img
      src={image}
      alt=''
      className='h-full w-full object-contain'
      style={{ borderRadius: '5px' }}
      loading='lazy'
      decoding='async'
    />
  )
}
