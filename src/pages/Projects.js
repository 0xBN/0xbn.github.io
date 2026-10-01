import { ProjectKeenSlider } from 'components/ProjectKeenSlider'
import { usePortfolioContext } from 'hooks/usePortfolioContext'

export const Projects = () => {
  const { site } = usePortfolioContext()

  return <ProjectKeenSlider projects={site.projects} />
}
