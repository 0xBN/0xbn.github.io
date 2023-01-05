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
    name: `Portfolio Website`,
    description:
      'Used to showcase projects and share relevant experience. It is open sourced and can be forked. Users can edit their information in a json-formatted file.',
    purpose:
      'Showcase my personal projects, but also to refine my React and Tailwind CSS skills.',
    challenges: `Tagged location of object same on different client window sizes, first experience using Firebase to write and save to docs for leaderboard tracking`,
    images: [
      'https://i.imgur.com/yexhYhI.gif',
      'https://i.imgur.com/FaVGGWd.gif',
      'https://i.imgur.com/xKp7QUZ.gif',
      'https://i.imgur.com/c33N0aX.gif',
    ],
    technologies: ['react', 'javascript', 'tailwind'],

    link: `0xbn.github.io`,
    code: `https://github.com/0xBN/0xbn.github.io`,
  },
  {
    id: 2,
    name: `Airbnb Frontend`,
    description: 'A frontend clone of the Airbnb website.',
    purpose: `Learn React's reuseable components, routing and props. Refine HTML skills: flexbox, margin, padding, sticky elements.`,
    images: [
      'https://i.imgur.com/adg4VBy.gif',
      'https://i.imgur.com/RBtsfqS.gif',
      'https://i.imgur.com/N6Nd4QE.gif',
    ],
    technologies: ['react', 'javascript', 'css', 'Firebase'],

    link: `https://airbnb-clone-cuge.onrender.com/`,
    code: `https://github.com/0xBN/airbnb-clone`,
  },
  {
    id: 3,
    name: `Piano Tunes`,
    description:
      'Piano keyboard simulation with some tunes for the user to follow. Best experienced with a keyboard.',
    purpose: `A fun app to build dealing with audio and state. Built with React and styled with Tailwind.`,
    images: [
      'https://github.com/0xBN/gif_pub/blob/main/pianoTunes/mobile.gif?raw=true',
      'https://github.com/0xBN/gif_pub/blob/main/pianoTunes/desktop.gif?raw=true',
    ],
    technologies: ['react', 'javascript', 'tailwind'],

    link: `https://piano-tunes.onrender.com/`,
    code: `https://github.com/0xBN/piano_tunes`,
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
