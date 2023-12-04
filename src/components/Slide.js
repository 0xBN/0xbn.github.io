export const Slide = ({ image, cardWidth }) => {
  const oldSettings = `min-w-full`

  const newSettings = `w-[${cardWidth}]`

  return (
    <div className='absolute z-0 opacity-100'>
      <img
        src={image}
        alt=''
        // className={`${false && oldSettings} ${true && newSettings}`}

        style={{
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      />
    </div>
  )
}
