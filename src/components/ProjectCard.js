import {
  Carousel,
  EmphasizedWord,
  SvgAndLabel,
  TechnologyList,
} from 'components'
import { ProjectSvg } from 'svgs'
import { CardLinkOut } from './CardLinkOut'

export const ProjectCard = ({ project }) => {
  const newSettings = `border-2 border-white/30`
  const oldSettings = ``

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-xl bg-slate-200 p-2 text-xl shadow-md shadow-black/30 
      dark:bg-slate-700  ${false && oldSettings}  ${true && newSettings}
       m-4 md:w-11/12 md:p-4 lg:w-2/5 xl:w-1/3`}
      id='projectCard'
      style={{ justifyContent: 'space-between' }}
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
        <Carousel images={project.images} />
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
