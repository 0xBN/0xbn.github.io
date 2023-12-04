import {
  Carousel,
  EmphasizedWord,
  SvgAndLabel,
  TechnologyList,
} from 'components'
import { ProjectSvg } from 'svgs'
import { CardLinkOut } from './CardLinkOut'

export const ProjectCard = ({ project }) => {
  const calcCardWidth = () => {
    return window.innerWidth < 1500 ? 'md:max-w-4xl' : 'md:max-w-xl'
  }

  const cardWidth = `${calcCardWidth()}`

  const newSettings = `border-2 border-white/30`
  const oldSettings = ``

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-xl bg-slate-200 p-2 text-xl shadow-md shadow-black/30 
      dark:bg-slate-700  ${false && oldSettings} ${true && cardWidth} ${
        true && newSettings
      }
       md:p-4`}
    >
      <h3 className='text-center text-2xl font-bold' style={{ padding: '0' }}>
        <SvgAndLabel
          iconPlacement='left'
          label={project.name}
          svg={<ProjectSvg />}
          customAlignment='flex w-full items-center justify-center gap-2'
        />
      </h3>
      <div className={`grid w-full place-content-center`}>
        <Carousel images={project.images} cardWidth={cardWidth} />
      </div>

      <div className='flex flex-col gap-2 p-2'>
        {project.description && (
          <div>
            <p>
              <EmphasizedWord word='Description' custom={'text-md'} />
            </p>
            {project.description}
          </div>
        )}

        {project.purpose && (
          <div>
            <p>
              <EmphasizedWord word='Purpose' custom={'text-md'} />
            </p>
            {project.purpose}
          </div>
        )}

        <>
          <EmphasizedWord word='Tech Stack' />
          <TechnologyList list={project.technologies} />
        </>
        <CardLinkOut codeLink={project.code} liveLink={project.link} />
      </div>
    </div>
  )
}
