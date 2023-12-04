import React from 'react'

export const Pagination = ({ activeSlide, total, setActiveSlide }) => {
  if (total <= 1) return null
  const handlePaginationClick = (e) => setActiveSlide(Number(e.target.id))

  const paginationDots = () => {
    let list = []
    for (let i = 0; i < total; i++) {
      list.push(i)
    }

    return list.map((item) => {
      let isActive = list.indexOf(item) === activeSlide
      return (
        <div
          id={item}
          onClick={handlePaginationClick}
          key={item}
          className={`cursor-pointer text-8xl
          leading-4 drop-shadow-sm md:hover:opacity-50 
          ${
            isActive ? 'text-primaryLight dark:text-primaryDark' : 'text-white'
          }`}
        >
          .
        </div>
      )
    })
  }

  return (
    <div className='absolute bottom-12 right-1/2 flex translate-x-1/2 flex-row gap-4'>
      {paginationDots()}
    </div>
  )
}
