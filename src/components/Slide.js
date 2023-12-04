export const Slide = ({ image }) => {
  return (
    <div className='absolute z-0 opacity-100'>
      <img src={image} alt='' style={{ borderRadius: '5px' }} />
    </div>
  )
}
