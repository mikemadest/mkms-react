import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquare} from '@fortawesome/free-solid-svg-icons';
import {Waypoint} from 'react-waypoint';

const SmallArticle = props => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {title, image, href, description, tags, buttonLabel} = props;

  return (
    <article className={isScrolled ? 'scrolled' : ''}>
      <div className="illustration" style={{backgroundImage: `url(${image})`}}>
        {href ? (
          <a href={href} target="_blank">
            <img src={image} />
          </a>
        ) : (
          <img src={image} />
        )}
      </div>

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

      <div className="content">
        <p>
          {description}
          <br />
          <span className="highlight-features">{tags}</span>
        </p>
        {href && (
          <a href={href} target="_blank" className="see-more">
            {buttonLabel}
          </a>
        )}
      </div>
    </article>
  );
};

export default SmallArticle;
