import React from 'react'
import { SimpleBrandIcon } from 'components/SimpleBrandIcon'
import { toolIcons } from 'data/brandIcons'
import {
  ReactSvg,
  TypescriptSvg,
  JavascriptSvg,
  TailwindcssSvg,
  NodeSvg,
  GitSvg,
} from 'svgs'

const toolUseBrandColor = {
  claude: true,
  vscode: true,
}

export const skillIconMap = {
  typescript: TypescriptSvg,
  react: ReactSvg,
  javascript: JavascriptSvg,
  tailwind: TailwindcssSvg,
  node: NodeSvg,
  git: GitSvg,
}

export const renderSkillIcon = (iconKey) => {
  const tool = toolIcons[iconKey]
  if (tool) {
    return (
      <SimpleBrandIcon
        icon={tool}
        className='h-full w-full'
        useBrandColor={toolUseBrandColor[iconKey] ?? false}
      />
    )
  }

  const Icon = skillIconMap[iconKey]
  if (!Icon) return null
  return <Icon />
}
