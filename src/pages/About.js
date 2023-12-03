import { EmphasizedWord, ProfilePicture } from 'components'
import React from 'react'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'

const components = {
  types: {
    block: (props) => {
      // Check if the block is a normal paragraph
      if (props.node.style === 'normal') {
        // Use your custom paragraph component or styling
        return <p style={{ color: 'red' }}>{props.children}</p>
      }

      // For other block styles, return the default rendering
      // You might need to handle other styles like headings here
      return PortableText.defaultComponents.types.block(props)
    },
  },
  listItem: {
    // Your custom list item renderers
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>
    ),
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  // ... any other custom renderers ...
}

const urlFor = (client, source) => {
  const builder = imageUrlBuilder(client)
  return builder.image(source).url()
}

const transformAboutRawData = (data) => {
  const obj = {
    summary: data?.aboutSection?.[0]?.summary?.map((child) => {
      return child
    }),
    techStack: data?.aboutSection?.[0]?.techStack,
    techDictionary: data?.tech,
  }
  return obj
}

const transformTechStack = (data, client) => {
  return data?.techStack?.map((tech) => {
    const techObj = data.techDictionary.find((obj) => obj._id === tech._ref)
    if (techObj?.imageUrl) {
      techObj.imageUrl = urlFor(client, techObj.imageUrl)
    }
    return techObj
  })
}

export const About = ({ darkMode, pageLoaded }) => {
  const { portfolioData, client } = usePortfolioContext()
  const user = transformAboutRawData(portfolioData, client)
  const referencedTechStack = transformTechStack(user, client)

  const techStackToDisplay = referencedTechStack
    ?.map((tech) => tech.name)
    .join(', ')
    .concat('.')

  const summaryToDisplay = user.summary?.map((child, index) => {
    return (
      <p key={index} className='my-4'>
        {child}
      </p>
    )
  })

  return (
    <div className='py-4 px-6 text-lg md:flex md:flex-col md:justify-center md:text-3xl'>
      <div className='mb-4 grid w-full place-content-center md:hidden'>
        <ProfilePicture
          darkMode={darkMode}
          customDisplay='block w-28 p-0 m-0'
          customRounded='rounded-md'
        />
      </div>
      {summaryToDisplay}
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Tech Stack ' />
        {techStackToDisplay}
      </p>
    </div>
  )
}
