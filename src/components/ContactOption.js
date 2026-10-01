import { SvgAndLabel } from 'components'

export const ContactOption = ({ label, link, newTab, svg }) => {
  return (
    <a
      className='z-10 py-3 font-medium text-neutral-800 transition hover:text-neutral-950 dark:text-neutral-100 dark:hover:text-white md:py-4 md:text-xl'
      href={link}
      target={newTab ? '_blank' : undefined}
      rel='noreferrer'
    >
      <SvgAndLabel
        iconPlacement='left'
        svg={svg}
        label={label}
        customSize='flex h-8 w-8 shrink-0 items-center justify-center'
        customSvgColor='text-neutral-600 dark:text-neutral-300'
        customAlignment='flex w-full items-center gap-3'
      />
    </a>
  )
}
