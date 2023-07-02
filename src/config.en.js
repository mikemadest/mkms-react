import workConfiguratorImage from './assets/recentwork/configurateur-demo-3.gif';
import workPlayerImage from './assets/recentwork/player-demo5.gif';
import immodeskImage from './assets/olderworks/immodesk-dashboard.jpg';
import witchImage from './assets/olderworks/witch-journey-demo.jpg';
import githubImage from './assets/olderworks/github.jpg';
import codewarsImage from './assets/olderworks/codewars.jpg';
import blenderImage from './assets/olderworks/blender-tryout-small.jpg';
import lilibricoleImage from './assets/olderworks/lilibricole-small.jpg';
import expoJSImage from './assets/recentwork/expojs-dashboard.jpg';
import hmhcoImage from './assets/recentwork/hmhco-solution.jpg';
import flakinessArticleImage from './assets/articles/medium-article-flakiness3.jpg';
import linkedomArticleImage from './assets/articles/medium-article-linkedom3.jpg';
import {faAddressCard, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

const menu = [
  {
    link: '#about',
    label: 'About',
    icon: faAddressCard,
  },
  {
    link: '#recent-work',
    label: 'Recent work',
    icon: faLaptopCode,
  },
];

const skills = [
  ['Front-end', 'JavaScript (ES6), React, HTML / HTML5, CSS (flex, grid, SASS, less), WebGL'],
  ['Back-end', 'Node.js, PHP, MYSQL, Zend Framework'],
  ['Testing Frameworks', 'React Testing Library, Jest, MSW, Codecept, Selenium'],
  ['Build Tools / CI / CD', 'Webpack, Jenkins, Concourse, Docker'],
  ['Team player', 'Team Collaboration, Mentoring, Code Reviews'],
];

const mediumArticles = [
  {
    title: 'The 4 stages of flakiness',
    presentation:
      'Presentation of our issues with flakiness in unit tests (React Testing Library, Jest, Jenkins), our investigation results and solutions',
    href: 'https://medium.com/hmh-engineering/the-4-stages-of-flakiness-part-1-3-denial-anger-depression-and-acceptance-43b2496cab22',
    linkA11y: 'View Medium article on unit tests flakiness',
    linkLabel: 'View article',
    tags: '#Jest #ReactJS #Jenkins #NodeJS #ReactTestingLibrary',
    points:
      'created documentation to help developers|Created a custom Jest reporter|Jenkins script to rerun failed tests',
    smallImage: flakinessArticleImage,
  },

  {
    title: 'Using LinkeDOM as test environment',
    presentation:
      'This article explore my investigation trying to replace JSDOM by LinkeDOM, what I could make work, when I decided to stop.',
    href: 'https://medium.com/hmh-engineering/using-linkedom-as-test-environment-in-jest-unit-tests-ec4a7659c8d6',
    linkA11y: 'View Medium article on LinkeDOM',
    linkLabel: 'View article',
    tags: '#Jest #JSDOM #LinkeDOM #NodeJS #ReactTestingLibrary',
    points:
      'setting realistic goals for a spike|investigating complex issues|making pull request for LinkeDOM and NodeJS',
    smallImage: linkedomArticleImage,
  },
];

const recentWorks = [
  {
    title: 'HMHCO solution',
    presentation:
      'widely-used learning solutions used by millions of users. More details on their website.',
    href: 'https://www.hmhco.com/',
    linkA11y: 'View HMH website',
    linkLabel: 'HMH solutions',
    tags: '#ReactJs #ES6 #Jenkins #NodeJS #MaterialUI #Codecept #singleSPA #Lerna',
    points:
      'Migrated angular 1.x applications to React|Created ReactJS applications and components in monorepo|Active code reviewer|Proposed and develop solutions for improving tests stability|Ensured compliance with accessibility requirements (WCAG 2.1 AA)',
    smallImage: hmhcoImage,
  },

  {
    title: 'ExpoJS',
    presentation:
      'ExpoJS is a docs generator and UI. It shows exported content like constants and functions and present packages in a searchable interface.',
    tags: '#ReactJs #ES6 #Concourse #NodeJS #MaterialUI',
    points:
      'Use Babel parser to analyse JS content|take 7 seconds to scans more than 150 packages|Build documentation|Link to github sources and commits|Suggestions for Package improvements|Hackathon project',
    smallImage: expoJSImage,
  },

  {
    title: 'Housing configurator',
    presentation:
      'Shop for floor covering, cupboard choice, bathroom decoration and other options for your housing and get a real time preview of your choices.',
    tags: '#PHP #ZendFramework2 #ThreeJS #Javascript #ProjectManager #Webservice',
    points:
      'Proposed and implemented php code architecture, model, coding|Created 360° viewer and ThreeJS/WebGL components for real time rendering|Recognized efficiency, quality control and management of the team|Managed massive gain in media processing with automation scripts|Created a how-to manual, handled junior training',
    smallImage: workConfiguratorImage,
  },
  {
    title: 'Player 3d',
    presentation:
      'Javascript viewer mixing real time and pre-rendered scene. Mission was to improve loading time and performances.',
    tags: '#WebGL #ThreeJS #Javascript',
    points:
      '80% faster display and ready for interaction|More responsive control and reworked inertia simulation|Improved code readability, refactored into 4 smaller single purpose classes|Gave autonomy to the teams using it with extensive API documentation, examples and test cases',
    smallImage: workPlayerImage,
  },
];

const olderWorks = [
  {
    title: 'Immodesk',
    presentation: 'A real estate ERP with CRM module, calendar tool, chat and highly customizable.',
    tags: '#PHP #Mysql #ZendFramework #Javascript #Bootstrap #ProjectManager',
    smallImage: immodeskImage,
  },

  {
    title: 'HTML5 game',
    linkLabel: 'Play',
    href: 'http://mkms.fr/witch-journey/',
    linkA11y: 'Play the game',
    presentation: 'Experiment creating a zelda type game using Phaser.',
    tags: '#Javascript #ES6 #Webpack #Phaser3 #Game',
    smallImage: witchImage,
  },

  {
    title: 'Github repositories',
    linkLabel: 'View project sources',
    href: 'https://github.com/mikemadest/a-witch-s-journey',
    linkA11y: 'View game Github repository',
    presentation: 'HTML5 game sources and project management',
    tags: '#Javascript #ES6 #Git',
    smallImage: githubImage,
  },

  {
    title: 'Codewars',
    linkLabel: 'Website',
    href: 'https://www.codewars.com',
    linkA11y: 'View Codewars website',
    presentation: 'Improving skills and playing with algorithm.',
    tags: '#Javascript #ES6',
    smallImage: codewarsImage,
  },

  {
    title: 'Blender',
    linkLabel: 'Full size',
    bigImage: blenderImage,
    linkA11y: 'View bigger blender image',
    presentation: 'Learning 3d modeling and creating real time demo with ThreeJS.',
    tags: '#Javascript #ThreeJS #Blender #Adaptability',
    smallImage: blenderImage,
  },

  {
    title: 'Older projects',
    bigImage: lilibricoleImage,
    linkA11y: '',
    presentation: (
      <>
        <strong>PHP/Mysql projects, Javascript, Front end and Back end creations.</strong> Customer
        space, media validation application for customer relationships, online shops, etc.
      </>
    ),
    tags: '#PHP #Mysql #Autonomous #Javascript #CSS #XHTML',
    smallImage: lilibricoleImage,
  },
];

export default {menu, skills, mediumArticles, recentWorks, olderWorks};
