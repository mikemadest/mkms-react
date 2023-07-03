import {useState} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faSquare} from '@fortawesome/free-solid-svg-icons';
import {Waypoint} from 'react-waypoint';
import prepareTags from '../helpers';

const Article = props => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {title, image, href, description, tags, points, buttonLabel, isSmall} = props;

  const styles = isSmall ? {backgroundImage: `url(${image})`} : {};
  return (
    <article className={isScrolled ? 'scrolled' : ''}>
      <div className="illustration" style={styles}>
        {href ? (
          <a href={href} target="_blank">
            <img src={image} />
          </a>
        ) : (
          <img src={image} />
        )}
      </div>

      <div className="content">
        <Waypoint
          onEnter={() => {
            setIsScrolled(true);
          }}
          onLeave={() => {
            setIsScrolled(false);
          }}
        >
          <h3>
            <FontAwesomeIcon icon={faSquare} />
            {title}
          </h3>
        </Waypoint>

        <p>
          {description}
          <br />
          <span className="highlight-features">{prepareTags(tags)}</span>
        </p>

        {points?.length && (
          <ul>
            {points.map(point => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} />
                {point}
              </li>
            ))}
          </ul>
        )}

        {href && (
          <a href={href} target="_blank" className="see-more">
            {buttonLabel}
          </a>
        )}
      </div>
    </article>
  );
};

Article.defaultProps = {
  href: '',
  buttonLabel: '',
  points: null,
  isSmall: false,
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  tags: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
  buttonLabel: PropTypes.string,
  isSmall: PropTypes.bool,
};

export default Article;
