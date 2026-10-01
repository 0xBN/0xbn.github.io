import darkBrian from '../shared/img/darkBrianV2.png'
import lightBrian from '../shared/img/lightBrianV2.png'
import {
  ReactSvg,
  TypescriptSvg,
  JavascriptSvg,
  TailwindcssSvg,
  NodeSvg,
  GitSvg,
  FirebaseSvg,
  CssSvg,
  HtmlSvg,
} from 'svgs'
import { projects } from './projects'

export const user = {
  firstName: 'Brian',
  lastName: 'N.',
  title: 'Software Engineer',
  github: 'https://www.github.com/0xBN',
  linkedin: 'https://www.linkedin.com/in/brianvbn',
  email: 'briann.code@gmail.com',
  resume:
    'https://drive.google.com/file/d/1cEwGd7YlPDVwlhZs_s1CtkPxxBr6z_Dg/view',
  profilePicLight: lightBrian,
  profilePicDark: darkBrian,
}

export const hero = {
  greeting: 'Hello —',
  headline: 'I build thoughtful, performant web experiences.',
  subheadline:
    'Frontend-focused engineer in Chicago, shipping e-commerce and internal tools.',
}

export const about = {
  summary: [
    `I'm a software engineer with a background in economics and operations. I moved into development after years of solving technical problems in fast-paced environments, and I've spent the last several years focused on frontend work — React, TypeScript, and the details that make products feel polished.`,
    `By day I work on e-commerce and web platform engineering. I'm also pursuing an MS in Computer Science (OMSCS) while staying curious about design systems, accessibility, and developer experience.`,
    `Outside of work you'll find me climbing, exploring restaurants around Chicago, and hanging out with my cats.`,
  ],
}

export const skills = [
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: 'typescript',
  },
  {
    name: 'React',
    link: 'https://react.dev/',
    icon: 'react',
  },
  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'javascript',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: 'tailwind',
  },
  { name: 'Node.js', link: 'https://nodejs.org/', icon: 'node' },
  { name: 'Git', link: 'https://git-scm.com/', icon: 'git' },
]

export const tools = [
  { name: 'Cursor', link: 'https://cursor.com', icon: 'cursor' },
  { name: 'Claude', link: 'https://claude.ai', icon: 'claude' },
  {
    name: 'VS Code',
    link: 'https://code.visualstudio.com/',
    icon: 'vscode',
  },
]

export { projects }

export const techIcons = {
  react: <ReactSvg />,
  javascript: <JavascriptSvg />,
  tailwind: <TailwindcssSvg />,
  node: <NodeSvg />,
  typescript: <TypescriptSvg />,
  git: <GitSvg />,
  firebase: <FirebaseSvg />,
  css: <CssSvg />,
  html: <HtmlSvg />,
}

export const techWebsites = {
  react: 'https://react.dev/',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  tailwind: 'https://tailwindcss.com/',
  node: 'https://nodejs.org/',
  typescript: 'https://www.typescriptlang.org/',
  git: 'https://git-scm.com/',
  firebase: 'https://firebase.google.com/',
  css: 'https://www.w3.org/Style/CSS/',
  html: 'https://html.spec.whatwg.org/',
}

export const techWordUpperCase = ['html', 'css']

export const site = {
  user,
  hero,
  about,
  skills,
  tools,
  projects,
}
