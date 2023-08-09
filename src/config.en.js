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
    description:
      'Presentation of our issues with flakiness in unit tests (React Testing Library, Jest, Jenkins), our investigation results and solutions.',
    href: 'https://medium.com/hmh-engineering/the-4-stages-of-flakiness-part-1-3-denial-anger-depression-and-acceptance-43b2496cab22',
    imageAlt:
      'Illustration for Medium article on unit tests flakiness showing a giant hand grabbing a bridge',
    linkLabel: 'View article',
    tags: '#Jest #ReactJS #Jenkins #NodeJS #ReactTestingLibrary',
    points:
      'created documentation to help developers|Created a custom Jest reporter|Jenkins script to rerun failed tests',
    image: flakinessArticleImage,
  },

  {
    title: 'Using LinkeDOM as test environment',
    description:
      'This article present a part of my investigation trying to replace JSDOM by LinkeDOM and in particular a virtual machine bug.',
    href: 'https://medium.com/hmh-engineering/using-linkedom-as-test-environment-in-jest-unit-tests-ec4a7659c8d6',
    imageAlt:
      'Illustration for Medium article on LinkeDOM showing a wooden astronaut surrounded by nature',
    linkLabel: 'View article',
    tags: '#Jest #JSDOM #LinkeDOM #NodeJS #ReactTestingLibrary',
    points:
      'setting realistic goals for a spike|investigating complex issues|making pull request for LinkeDOM and NodeJS',
    image: linkedomArticleImage,
  },
];

const recentWorks = [
  {
    title: 'HMHCO solution',
    description: 'Widely-used learning solutions with millions of users in the US.',
    href: 'https://www.hmhco.com/',
    imageAlt: 'Image showing HMH website structure',
    linkLabel: 'HMH solutions',
    tags: '#ReactJs #ES6 #Jenkins #NodeJS #MaterialUI #Codecept #singleSPA #Lerna',
    points:
      'Migrated angular 1.x applications to React|Created ReactJS applications and components in monorepo|Active code reviewer|Proposed and develop solutions for improving tests stability|Ensured compliance with accessibility requirements (WCAG 2.1 AA)',
    image: hmhcoImage,
  },

  {
    title: 'ExpoJS',
    description:
      'ExpoJS is a docs generator and UI. It shows exported content like constants and functions and present packages in a searchable interface.',
    tags: '#ReactJs #ES6 #Concourse #NodeJS #MaterialUI',
    imageAlt: 'screenshot of the ExpoJS dashboard, showing package cards, navigation and search',
    points:
      'Use Babel parser to analyse JS content|take 7 seconds to scans more than 150 packages|Build documentation|Link to github sources and commits|Suggestions for Package improvements|Hackathon project',
    image: expoJSImage,
  },

  {
    title: 'Housing configurator',
    description:
      'Shop for floor covering, cupboard choice, bathroom decoration and other options for your housing and get a real time preview of your choices.',
    tags: '#PHP #ZendFramework2 #ThreeJS #Javascript #ProjectManager #Webservice',
    points:
      'Proposed and implemented php code architecture, model, coding|Created 360° viewer and ThreeJS/WebGL components for real time rendering|Recognized efficiency, quality control and management of the team|Managed massive gain in media processing with automation scripts|Created a how-to manual, handled junior training',
    image: workConfiguratorImage,
    imageAlt:
      'animated gif showing a room in 360 view with a user changing the floor covering in real time',
  },
  {
    title: 'Player 3d',
    description:
      'Javascript viewer mixing real time and pre-rendered scene. Mission was to improve loading time and performances.',
    tags: '#WebGL #ThreeJS #Javascript',
    points:
      '80% faster display and ready for interaction|More responsive control and reworked inertia simulation|Improved code readability, refactored into 4 smaller single purpose classes|Gave autonomy to the teams using it with extensive API documentation, examples and test cases',
    image: workPlayerImage,
    imageAlt:
      'animated gif showing a building surrounded by snow rotating and user hovering accomodations active zones, revealing details on them',
  },
];

const olderWorks = [
  {
    title: 'Immodesk',
    description: 'A real estate ERP with CRM module, calendar tool, chat and highly customizable.',
    tags: '#PHP #Mysql #ZendFramework #Javascript #Bootstrap #ProjectManager',
    image: immodeskImage,
    imageAlt: 'image showing immodesk dashboard',
  },

  {
    title: 'HTML5 game',
    linkLabel: 'Play',
    href: 'http://mkms.fr/witch-journey/',
    linkA11y: 'Play the game',
    description: 'Experiment creating a zelda type game using Phaser.',
    tags: '#Javascript #ES6 #Webpack #Phaser3 #Game',
    image: witchImage,
    imageAlt: 'screenshot of the game, showing characters in a retro Zelda style village',
  },

  {
    title: 'Github repositories',
    linkLabel: 'View project sources',
    href: 'https://github.com/mikemadest/a-witch-s-journey',
    linkA11y: 'View game Github repository',
    description: 'HTML5 game sources and project management',
    tags: '#Javascript #ES6 #Git',
    image: githubImage,
    imageAlt: 'Screenshot of a github page',
  },

  {
    title: 'Codewars',
    linkLabel: 'Website',
    href: 'https://www.codewars.com',
    linkA11y: 'View Codewars website',
    description: 'Improving skills and playing with algorithm.',
    tags: '#Javascript #ES6',
    image: codewarsImage,
    imageAlt:
      'Screenshot of a page of Codewars, a website where people can work on interesting development "puzzles"',
  },

  {
    title: 'Blender',
    linkLabel: 'Full size',
    bigImage: blenderImage,
    linkA11y: 'View bigger blender image',
    description: 'Learning 3d modeling and creating real time demo with ThreeJS.',
    tags: '#Javascript #ThreeJS #Blender #Adaptability',
    image: blenderImage,
    imageAlt: 'render of the inside of a room, showing stairs, windows, tables, stool, a plant',
  },

  {
    title: 'Older projects',
    bigImage: lilibricoleImage,
    linkA11y: '',
    description: (
      <>
        <strong>PHP/Mysql projects, Javascript, Front end and Back end creations.</strong> Customer
        space, media validation application for customer relationships, online shops, etc.
      </>
    ),
    tags: '#PHP #Mysql #Autonomous #Javascript #CSS #XHTML',
    image: lilibricoleImage,
    imageAlt: 'screenshot of a "do it yourself" training website from my old porfolio of projects',
  },
];

export default {menu, skills, mediumArticles, recentWorks, olderWorks};
