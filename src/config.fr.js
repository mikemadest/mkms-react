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
    label: 'A propos',
    icon: faAddressCard,
  },
  {
    link: '#recent-work',
    label: 'Porfolio',
    icon: faLaptopCode,
  },
];

const skills = [
  ['Front-end', 'JavaScript (ES6), React, HTML / HTML5, CSS (flex, grid, SASS, less), WebGL'],
  ['Back-end', 'Node.js, PHP, MYSQL, Zend Framework'],
  ['Testing Frameworks', 'React Testing Library, Jest, MSW, Codecept, Selenium'],
  ['CI / CD', 'Webpack, Jenkins, Concourse, Docker'],
  ['En équipe', "Force de proposition, passionné, gestion d'équipe, autonome, revues de code"],
];

const mediumArticles = [
  {
    title: "Les 4 étapes de l'instabilité",
    presentation:
      "Présentation de nos problèmes relatif à l'instabilité de nos tests unitaires et des différentes solutions adoptées.",
    href: 'https://medium.com/hmh-engineering/the-4-stages-of-flakiness-part-1-3-denial-anger-depression-and-acceptance-43b2496cab22',
    linkA11y: "Voir l'article Medium sur la stabilité des tests unitaires (anglais seulement)",
    linkLabel: "Voir l'article en anglais",
    tags: '#Jest #ReactJS #Jenkins #NodeJS #ReactTestingLibrary',
    points:
      "Création d'une documentation en support des développeurs|Raporteur d'erreur personalisé pour Jest|Exécuter uniquement les tests en échec avec Jenkins",
    smallImage: flakinessArticleImage,
  },

  {
    title: 'Utiliser LinkeDOM sur les tests unitaires',
    presentation:
      "Cet article détaille mon enquête sur la faisabilité de remplacer JSDOM par LinkeDOM sur nos tests unitaires, les problèmes rencontrés et le résultat de l'étude.",
    href: 'https://medium.com/hmh-engineering/using-linkedom-as-test-environment-in-jest-unit-tests-ec4a7659c8d6',
    linkA11y: "voir l'article Medium sur LinkeDOM",
    linkLabel: "Voir l'article",
    tags: '#Jest #JSDOM #LinkeDOM #NodeJS #ReactTestingLibrary',
    points:
      'Définir des objectifs réalistes|résoudre des problèmes sur une problématique complexe|Création de Pull Request LinkeDOM and NodeJS',
    smallImage: linkedomArticleImage,
  },
];

const recentWorks = [
  {
    title: 'HMHCO solution',
    presentation:
      "Solutions éducatives à destination des districts et écoles utilisées par des millions de professeurs et étudiants au États-Unis. Consulter leur site pour plus d'informations.",
    href: 'https://www.hmhco.com/',
    linkA11y: 'Voir le site HMH',
    linkLabel: 'HMH solutions',
    tags: '#ReactJs #ES6 #Jenkins #NodeJS #MaterialUI #Codecept #singleSPA #Lerna',
    points:
      "Migration d'applications angular 1.x vers React|Auteur de nombreuses applications et composants sur le mono repo|Revue de code|Amélioration de la stabilité des tests unitaires sur le pipeline Jenkins|Respect des règles d'accessibilité des contenus Web WCAG 2.1 AA",
    smallImage: hmhcoImage,
  },

  {
    title: 'ExpoJS',
    presentation:
      'ExpoJS est un générateur de documentation et une interface pour chercher et consulter les informations sur les packages.',
    tags: '#ReactJs #ES6 #Concourse #NodeJS #MaterialUI',
    points:
      "Sources Javascript lues avec Babel Parser|Analyse de plus de 150 packages en moins de 7 secondes|Affiche une documentation des packages| Liens avec Github vers les sources et commits|Suggestions pour l'amélioration des Packages|Projet Hackathon",
    smallImage: expoJSImage,
  },
  {
    title: 'Configurateurs immobilier',
    presentation:
      'Personnalisez votre logement en choisissant les revêtements de sol, placards, domotique et autres options et visualisez en temps réel le rendu de vos choix.',
    tags: '#PHP #ZendFramework2 #ThreeJS #Javascript #ProjectManager #Webservice',
    points:
      "Mise en place du modèle, architecture de code et implémentation en PHP|Création d'un lecteur de visite virtuelle en HTML5 et de composants ThreeJS/WebGL pour le rendu temps réel|Création des outils javascript et gestion des échanges avec l'équipe 3d|Efficacité et contrôle qualité reconnus, gestion de l'équipe|Création de scripts pour une automatisation de la production des médias 3d|Documentation du projet et formation des juniors",
    smallImage: workConfiguratorImage,
  },
  {
    title: 'Player 3d',
    presentation:
      "Outil de visualisation WebGL mélangeant rendus temps réel et pré-calculé. L'intervention concernait l'amélioration des performances et du temps de chargement.",
    tags: '#WebGL #ThreeJS #Javascript',
    points:
      "Gain de 80% sur la vitesse d'affichage et la disponibilité|Meilleure réactivité globale et réécriture de la simulation d'inertie|Amélioration de la lisibilité du code : séparation en 4 classes à responsabilité unique|Documentation de l'API et exemples",
    smallImage: workPlayerImage,
  },
];

const olderWorks = [
  {
    title: 'Immodesk',
    presentation:
      'ERP Immobilier incluant une CRM, un agenda, un chat et personalisable selon les besoins du client.',
    tags: '#PHP #Mysql #ZendFramework #Javascript #Bootstrap #ProjectManager',
    smallImage: immodeskImage,
  },

  {
    title: 'Démo de jeu Html5',
    linkLabel: 'Jouer',
    href: 'http://mkms.fr/witch-journey/',
    linkA11y: 'Play the game',
    presentation: "Démo d'un jeux de type RPG",
    tags: '#Javascript #ES6 #Webpack #Phaser3 #Game',
    smallImage: witchImage,
  },

  {
    title: 'Github',
    linkLabel: 'Voir les sources',
    href: 'https://github.com/mikemadest/a-witch-s-journey',
    linkA11y: 'Voir les sources sur Github',
    presentation: 'Sources du jeu HTML5 et gestion de projet sur Git',
    tags: '#Javascript #ES6 #Git',
    smallImage: githubImage,
  },

  {
    title: 'Codewars',
    linkLabel: 'site Web',
    href: 'https://www.codewars.com',
    linkA11y: 'Voir le site Codewars',
    presentation: 'Auto-formation et recherche de challenge sur des algorithmes.',
    tags: '#Javascript #ES6',
    smallImage: codewarsImage,
  },

  {
    title: 'Blender',
    linkLabel: 'Full size',
    bigImage: blenderImage,
    linkA11y: 'View bigger blender image',
    presentation: 'Auto-formation en modélisation 3d et temps réel via ThreeJS.',
    tags: '#Javascript #ThreeJS #Blender #Adaptability',
    smallImage: blenderImage,
  },

  {
    title: 'Autres projets',
    bigImage: lilibricoleImage,
    linkA11y: '',
    presentation: (
      <>
        <strong>Développements PHP/Mysql, Javascript, Front et Back.</strong> Espace client avec
        validation de perspectives 3d, gestion des retours clients via un système de postits,
        boutiques en ligne, logiciel de caisse, etc.
      </>
    ),
    tags: '#PHP #Mysql #Autonomous #Javascript #CSS #XHTML',
    smallImage: lilibricoleImage,
  },
];

export default {menu, skills, mediumArticles, recentWorks, olderWorks};
