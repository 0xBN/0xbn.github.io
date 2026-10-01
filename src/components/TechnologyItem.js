import { SvgAndLabel } from 'components'
import { techIcons, techWordUpperCase, techWebsites } from 'data'

export const TechnologyItem = ({ item }) => {
  if (!item) return
  item = item.toLowerCase()

  const formatTechnology = (word) => {
    if (techWordUpperCase.includes(word)) {
      return word.toUpperCase()
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }

  if (!techIcons[item]) return null

  return (
    <li className='rounded-full border border-white/10 bg-white/5 text-xs hover:border-primaryDark/30'>
      <a href={techWebsites[item]} target='_blank' rel='noreferrer' className='block px-2 py-1'>
        <SvgAndLabel
          iconPlacement='left'
          label={formatTechnology(item)}
          svg={techIcons[item]}
          customSize='w-4'
          customAlignment='gap-1 flex items-center'
          customFontColor='font-medium text-neutral-700 dark:text-neutral-200'
        />
      </a>
    </li>
  )
}
