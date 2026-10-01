import { SkillCard } from 'components'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { renderSkillIcon } from 'data/skillIcons'

export const Skills = () => {
  const { site } = usePortfolioContext()
  const { skills, tools } = site

  const items = [...tools, ...skills]

  return (
    <ul className='flex flex-wrap items-center justify-center gap-2 sm:justify-start'>
      {items.map((item) => (
        <SkillCard
          key={item.name}
          label={item.name}
          svg={renderSkillIcon(item.icon)}
          link={item.link}
          variant='tool'
          compact
        />
      ))}
    </ul>
  )
}
