import React from 'react'

export const SkillCard = ({ label, svg, src, bg, link }) => {
  return (
    <li className={`m-4 flex flex-col border border-transparent md:w-auto `}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='gap-8 text-center'
      >
        <span className={`h-[60px] w-[60px]  md:h-28 md:w-28`}>
          {src ? (
            <img
              src={src}
              alt={label}
              className={`mx-auto h-1/2 w-1/2 object-contain ${
                bg === 'white' ? 'rounded-sm bg-white' : ''
              }`}
            />
          ) : (
            svg
          )}
        </span>
        <span className='md:text-md text-xs font-bold uppercase'>{label}</span>
      </a>
    </li>
  )
}
