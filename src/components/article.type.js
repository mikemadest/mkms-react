import PropTypes from 'prop-types';

const ArticleType = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  tags: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
  buttonLabel: PropTypes.string,
  isSmall: PropTypes.bool
};
export default ArticleType;
