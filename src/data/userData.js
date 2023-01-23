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
  calendly: 'https://www.calendly.com/brianvbn',
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
    summary: [
      `After earning my Bachelor of Science in Economics from UC Davis, I held a variety of roles at Amazon, including operations management, launching a fulfillment center, program management for Amazon Freight, and campaign analysis for Amazon Advertising.`,
      `I valued the opportunity to learn about different aspects of the business and acquire a wide range of skills. At Amazon, I often served as the technical point-person, handling tasks such as creating and manipulating excel spreadsheets, writing macros, and constructing automated reporting dashboards.`,
      `    Later, I worked at a startup with college friends, where my responsibilities were primarily technical, including developing custom reports and overseeing the company's procedures for virtual assistants. Through this experience, I discovered my passion for utilizing technology and problem-solving in software development. `,
      `    I then dedicated myself full-time to learning full-stack development through The Odin Project's curriculum. Today, I am thrilled with my progress in creating projects from start to finish, including both the backend and frontend logic. `,
      `    I am eager to continue to improve my skills, with current personal objectives of improving proficiency in TypeScript, writing more effective testing code, and enhancing my algorithm visualization app. I am also actively seeking professional opportunities to apply and expand upon my skills. `,
      `    In my spare time, I enjoy spending time with my two cats, exploring new restaurants in Chicago, and climbing at my local gym.`,
    ],

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
  {
    id: 4,
    name: `Custom Gallery`,
    description:
      'Smooth gallery component that expands and contracts based on user clicks.',
    purpose: `Practice responsive design and smooth animations`,
    images: [
      'https://github.com/0xBN/gif_pub/blob/main/js_gallery/desktopV2.gif?raw=true',
      'https://github.com/0xBN/gif_pub/blob/main/js_gallery/mobile.gif?raw=true',
    ],
    technologies: ['react', 'javascript', 'tailwind', 'css'],

    link: `https://coruscating-bombolone-1fe251.netlify.app/`,
    code: `https://github.com/0xBN/js_gallery`,
  },
  {
    id: 5,
    name: `Breakout Game`,
    description:
      'Breakout game made using React, Tailwind CSS and HTML5 Canvas API. ',
    purpose: `Learn Canvas API and practice using custom hooks`,
    images: [
      'https://github.com/0xBN/gif_pub/blob/main/breakout_game/desktop.gif?raw=true',
      'https://github.com/0xBN/gif_pub/blob/main/breakout_game/mobile.gif?raw=true',
    ],
    technologies: ['react', 'javascript', 'tailwind', 'css'],

    link: `https://breakout-react.onrender.com/`,
    code: `https://github.com/0xBN/breakout_game`,
  },
  {
    id: 6,
    name: `Pacman (WIP)`,
    description:
      'Pacman game currently a work in progress. Github for development updates',
    purpose: `Learn custom hooks, pathfinding algorithm.`,
    images: [
      'https://github.com/0xBN/gif_pub/blob/main/pacman/desktop.gif?raw=true',
    ],
    technologies: ['react', 'javascript', 'tailwind', 'css'],

    link: `https://pacman-react.onrender.com/`,
    code: `https://github.com/0xBN/pacman_v1`,
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
