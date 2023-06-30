import workConfiguratorImage from './assets/recentwork/configurateur-demo-3.gif';
import workPlayerImage from './assets/recentwork/player-demo5.gif';
import immodeskImage from './assets/olderworks/immodesk-dashboard.jpg';
import witchImage from './assets/olderworks/witch-journey-demo.jpg';
import githubImage from './assets/olderworks/github.jpg';
import codewarsImage from './assets/olderworks/codewars.jpg';
import blenderImage from './assets/olderworks/blender-tryout-small.jpg';
import lilibricoleImage from './assets/olderworks/lilibricole-small.jpg';
import {faAddressCard, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

export const menu = [
  {
    link: '#about',
    label: 'mkms.nav.about',
    icon: faAddressCard,
  },
  {
    link: '#recent-work',
    label: 'mkms.nav.recentwork',
    icon: faLaptopCode,
  },
];

export const skills = [
  ['mkms.about.skill.js.title', 'mkms.about.skill.js.description'],
  ['mkms.about.skill.php.title', 'mkms.about.skill.php.description'],
  ['mkms.about.skill.basics.title', 'mkms.about.skill.basics.description'],
  ['mkms.about.skill.team.title', 'mkms.about.skill.team.description'],
  ['mkms.about.skill.methods.title', 'mkms.about.skill.methods.description'],
];

export const recentWorks = [
  {
    title: `mkms.porfolio.article.1.title`,
    linkLabel: `mkms.porfolio.article.1.linkLabel`,
    href: 'https://configurateur.vinci-immobilier.com/visite/portail',
    linkA11y: `mkms.porfolio.article.1.link`,
    presentation: `mkms.porfolio.article.1.presentation`,
    tags: `mkms.porfolio.article.1.tags`,
    points: `mkms.porfolio.article.1.points`,
    smallImage: workConfiguratorImage,
  },
  {
    title: `mkms.porfolio.article.2.title`,
    linkLabel: `mkms.porfolio.article.2.linkLabel`,
    href: 'http://www.safran-immobilier.fr/programme/le-domaine-de-la-mission-talence-gironde/?template=maquette#navigation-programme',
    linkA11y: `mkms.porfolio.article.2.link`,
    presentation: `mkms.porfolio.article.2.presentation`,
    tags: `mkms.porfolio.article.2.tags`,
    points: `mkms.porfolio.article.2.points`,
    smallImage: workPlayerImage,
  },
];

export const olderWorks = [
  {
    title: `mkms.porfolio.article.3.title`,
    linkLabel: `mkms.porfolio.article.3.linkLabel`,
    href: 'https://www.immodesk.fr/',
    linkA11y: `mkms.porfolio.article.3.link`,
    presentation: `mkms.porfolio.article.3.presentation`,
    tags: `mkms.porfolio.article.3.tags`,
    smallImage: immodeskImage,
  },

  {
    title: `mkms.porfolio.article.4.title`,
    linkLabel: `mkms.porfolio.article.4.linkLabel`,
    href: 'http://mkms.fr/witch-journey/',
    linkA11y: `mkms.porfolio.article.4.link`,
    presentation: `mkms.porfolio.article.4.presentation`,
    tags: `mkms.porfolio.article.4.tags`,
    smallImage: witchImage,
  },

  {
    title: `mkms.porfolio.article.5.title`,
    linkLabel: `mkms.porfolio.article.5.linkLabel`,
    href: 'https://github.com/mikemadest/a-witch-s-journey',
    linkA11y: `mkms.porfolio.article.5.link`,
    presentation: `mkms.porfolio.article.5.presentation`,
    tags: `mkms.porfolio.article.5.tags`,
    smallImage: githubImage,
  },

  {
    title: `mkms.porfolio.article.6.title`,
    linkLabel: `mkms.porfolio.article.6.linkLabel`,
    href: 'https://www.codewars.com',
    linkA11y: `mkms.porfolio.article.6.link`,
    presentation: `mkms.porfolio.article.6.presentation`,
    tags: `mkms.porfolio.article.6.tags`,
    smallImage: codewarsImage,
  },

  {
    title: `mkms.porfolio.article.7.title`,
    linkLabel: `mkms.porfolio.article.7.linkLabel`,
    bigImage: blenderImage,
    linkA11y: `mkms.porfolio.article.7.link`,
    presentation: `mkms.porfolio.article.7.presentation`,
    tags: `mkms.porfolio.article.7.tags`,
    smallImage: blenderImage,
  },

  {
    title: `mkms.porfolio.article.8.title`,
    bigImage: lilibricoleImage,
    linkA11y: `mkms.porfolio.article.8.link`,
    presentation: `mkms.porfolio.article.8.presentation`,
    tags: `mkms.porfolio.article.8.tags`,
    smallImage: lilibricoleImage,
  },
];
