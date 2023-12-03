import { ProjectCard } from 'components'
import React from 'react'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { sanityUrlBuilder } from 'utils/helpers'

const transformProjectsRawData = (data, sanityClient) => {
  const projectDictionary = data?.project

  const projectsInOrder = data?.projects?.[0]?.projects
    .map((project) => {
      const projectData = projectDictionary.find((p) => p._id === project?._ref)

      if (!projectData) {
        return null
      }

      const images =
        projectData.images?.map((image) =>
          sanityUrlBuilder(sanityClient, image.asset._ref)
        ) || []

      return {
        ...projectData,
        images,
      }
    })
    .filter((project) => project !== null)

  return projectsInOrder
}

export const Projects = () => {
  const { portfolioData, sanityClient } = usePortfolioContext()
  const projectsData = transformProjectsRawData(portfolioData, sanityClient)
  const newProjectsList = projectsData?.map((project) => {
    return <ProjectCard key={project._id} project={project} />
  })

  return (
    <article
      className={`flex flex-wrap justify-items-center gap-x-6 gap-y-10 px-4 py-2 md:justify-evenly md:p-6`}
    >
      {newProjectsList}
    </article>
  )
}
