import { Fragment } from 'react';

const tagsLinks = {
  '#PHP': 'https://www.php.net/',
  '#React': 'https://react.dev/',
  '#ES6': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  '#MaterialUI': 'https://mui.com/',
  '#NodeJS': 'https://nodejs.org/en',
  '#Codecept': 'https://codecept.io/',
  '#Jenkins': 'https://www.jenkins.io/',
  '#Concourse': 'https://concourse-ci.org/',
  '#singleSPA': 'https://single-spa.js.org/',
  '#Lerna': 'https://lerna.js.org/',
  '#ZendFramework2': 'https://framework.zend.com/',
  '#ZendFramework': 'https://framework.zend.com/',
  '#ThreeJS': 'https://threejs.org/',
  '#WebGL': 'https://get.webgl.org/',
  '#Bootstrap': 'https://getbootstrap.com/',
  '#Webpack': 'https://webpack.js.org/',
  '#Phaser': 'https://github.com/photonstorm/phaser',
  '#Phaser3': 'https://github.com/photonstorm/phaser',
  '#Git': 'https://github.com/mikemadest',
  '#Blender': 'https://www.blender.org/'
};

const prepareTags = (text) => {
  const tagList = text.split(' ');
  return tagList.map((tag) =>
    tagsLinks[tag] ? (
      <a href={tagsLinks[tag]} key={tag}>
        {tag}
      </a>
    ) : (
      tag + ' '
    )
  );
};

export default prepareTags;
