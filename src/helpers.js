import {Fragment} from 'react';

const tagsLinks = {
  '#PHP': <a href="">#PHP</a>,
  '#ZendFramework2': <a href="https://framework.zend.com/">#ZendFramework2</a>,
  '#ZendFramework': <a href="https://framework.zend.com/">#ZendFramework</a>,
  '#ThreeJS': <a href="https://threejs.org/">#ThreeJS</a>,
  '#WebGL': <a href="https://get.webgl.org/">#WebGL</a>,
  '#Bootstrap': <a href="https://getbootstrap.com/">#Bootstrap</a>,
  '#Webpack': <a href="https://webpack.js.org/">#Webpack</a>,
  '#Phaser': <a href="https://github.com/photonstorm/phaser">#Phaser</a>,
  '#Phaser3': <a href="https://github.com/photonstorm/phaser">#Phaser3</a>,
  '#Git': <a href="https://github.com/mikemadest">#Git</a>,
  '#Blender': <a href="https://www.blender.org/">#Blender</a>,
};

const prepareTags = text => {
  const tagList = text.split(' ');
  return tagList.map(tag =>
    tagsLinks[tag] ? <Fragment key={tag}>{tagsLinks[tag]} </Fragment> : tag + ' '
  );
};

export default prepareTags;
