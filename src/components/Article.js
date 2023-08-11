import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { Waypoint } from 'react-waypoint';
import prepareTags from '../helpers';
import ArticleType from './article.type';

const Article = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { title, imageAlt, image, href, description, tags, points, buttonLabel, isSmall } = props;
  const styles = isSmall ? { backgroundImage: `url(${image})` } : {};

  return (
    <article className={isScrolled ? 'scrolled' : ''}>
      <div className="illustration" style={styles}>
        {href ? (
          <a href={href} target="_blank">
            <img src={image} alt={imageAlt} />
          </a>
        ) : (
          <img src={image} alt={imageAlt} />
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
            {points.map((point) => (
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
  image: '',
  points: null,
  isSmall: false
};

Article.propTypes = { ...ArticleType };

export default Article;
