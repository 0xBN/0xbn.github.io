const img1 = require('../shared/img/1.png');
const img2 = require('../shared/img/2.png');
const img3 = require('../shared/img/3.png');
const {
  ReactSvg,
  FirebaseSvg,
  HtmlSvg,
  CssSvg,
  JavascriptSvg,
  TailwindcssSvg,
  NodeSvg,
  MongodbSvg,
  ExpressSvg,
  ReduxSvg,
  TypescriptSvg,
  PythonSvg,
  JestSvg,
} = require('svgs');

const darkBrian = require('../shared/img/darkBrianV2.png');
const lightBrian = require('../shared/img/lightBrianV2.png');

export const test = 'test123';

export const user = {
  first: 'Brian',
  last: 'N.',
  title: 'Software Engineer',
  github: 'https://www.github.com/0xBN',
  linkedin: 'https://www.linkedin.com/in/brianvbn',
  email: 'brianvbn@gmail.com',
  phone: '+1-312-715-8602',
  resume:
    'https://docs.google.com/document/d/1m7h-aZfQY0XD6neiBvEQkXJHwUIJjDuu/edit?usp=sharing&ouid=103781869510772888871&rtpof=true&sd=true',
  profilePicLight: lightBrian,
  profilePicDark: darkBrian,
  hero: {
    line1:
      'Self-driven, quick-starter, passionate developer with a curious mind.',
    line2: 'I enjoy solving complex and challenging real-world problems.',
  },
  about: {
    line1: 'I am a fullstack developer.',
    line2: `Growing up, I have always had an affinity for everything tech related. I
    loved exploring software mods for my devices and building PCs for my
    friends during my free time.`,
    line3: `Today I am passionate about developing applications that solve
    real-world problems impacting millions of users.`,
    languages: ['Javascript(ES6+)', 'Typescript', 'HTML', 'CSS', 'Python'],
    frontend: ['Tailwind CSS', 'React'],
    backend: ['Node', 'MongoDB', 'Express', 'Firebase'],
    otherTechnologies: [
      'Redux',
      'Jest',
      'Webpack',
      'NPM',
      'Git',
      'Github',
      'Railway',
      'Render',
      'PassportJS',
      'JSON Web Token',
    ],
  },
};

export const projects = [
  {
    id: 1,
    name: `Where's Waldo?`,
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    images: ['https://i.imgur.com/8v3okP7.gif', img1, img2, img3],
    technologies: [
      'firebase',
      'react',
      'html',
      'css',
      'javascript',
      'tailwind',
      'node',
      'mongodb',
      'express',
      'redux',
      'typescript',
      'python',
      'jest',
    ],

    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 2,
    name: `2Where's Waldo?`,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Number_4_in_red_rounded_square.svg/1024px-Number_4_in_red_rounded_square.svg.png',
      `http://www.clker.com/cliparts/p/7/W/8/F/T/purple-rounded-square-with-number-5-hi.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Eo_circle_red_number-6.svg/2048px-Eo_circle_red_number-6.svg.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 3,
    name: `3Where's Waldo?`,
    images: [
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eo_circle_blue_number-7.svg/2048px-Eo_circle_blue_number-7.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eo_circle_blue_number-8.svg/2048px-Eo_circle_blue_number-8.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eo_circle_purple_number-9.svg/1024px-Eo_circle_purple_number-9.svg.png`,
      `https://www.pngmart.com/files/14/10-Number-PNG-HD.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 4,
    name: `3Where's Waldo?`,
    images: [
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eo_circle_blue_number-7.svg/2048px-Eo_circle_blue_number-7.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eo_circle_blue_number-8.svg/2048px-Eo_circle_blue_number-8.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eo_circle_purple_number-9.svg/1024px-Eo_circle_purple_number-9.svg.png`,
      `https://www.pngmart.com/files/14/10-Number-PNG-HD.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 5,
    name: `3Where's Waldo?`,
    images: [
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eo_circle_blue_number-7.svg/2048px-Eo_circle_blue_number-7.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eo_circle_blue_number-8.svg/2048px-Eo_circle_blue_number-8.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eo_circle_purple_number-9.svg/1024px-Eo_circle_purple_number-9.svg.png`,
      `https://www.pngmart.com/files/14/10-Number-PNG-HD.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
  {
    id: 6,
    name: `3Where's Waldo?`,
    images: [
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eo_circle_blue_number-7.svg/2048px-Eo_circle_blue_number-7.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eo_circle_blue_number-8.svg/2048px-Eo_circle_blue_number-8.svg.png`,
      `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Eo_circle_purple_number-9.svg/1024px-Eo_circle_purple_number-9.svg.png`,
      `https://www.pngmart.com/files/14/10-Number-PNG-HD.png`,
    ],
    technologies: ['firebase', 'react', 'html', 'css', 'javascript'],
    description: 'Game where the user finds objects on screen.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    link: `https://0xbn.github.io/hidden-objects-game/`,
    code: `https://github.com/0xBN/hidden-objects-game`,
  },
];

export const techIcons = {
  firebase: <FirebaseSvg />,
  react: <ReactSvg />,
  html: <HtmlSvg />,
  css: <CssSvg />,
  javascript: <JavascriptSvg />,
  tailwind: <TailwindcssSvg />,
  node: <NodeSvg />,
  mongodb: <MongodbSvg />,
  express: <ExpressSvg />,
  redux: <ReduxSvg />,
  typescript: <TypescriptSvg />,
  python: <PythonSvg />,
  jest: <JestSvg />,
};

export const techWebsites = {
  firebase: 'https://firebase.google.com/',
  react: 'https://reactjs.org/',
  html: 'https://html.spec.whatwg.org/multipage/',
  css: 'https://www.w3.org/Style/CSS/Overview.en.html',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  tailwind: 'https://tailwindcss.com/',
  node: 'https://nodejs.org/en/',
  mongodb: 'https://www.mongodb.com/',
  express: 'https://expressjs.com/',
  redux: 'https://redux.js.org/',
  typescript: `https://www.typescriptlang.org/`,
  python: `https://www.python.org/`,
  jest: `https://jestjs.io/`,
};

export const techWordUpperCase = ['html', 'css'];
