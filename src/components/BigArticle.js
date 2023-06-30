import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faSquare} from '@fortawesome/free-solid-svg-icons';
import {Waypoint} from 'react-waypoint';

const BigArticle = props => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {title, image, href, description, tags, points, buttonLabel} = props;

  return (
    <article className={isScrolled ? 'scrolled' : ''}>
      <div className="illustration">
        <a href={href} target="_blank">
          <img src={image} />
        </a>
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
          <strong>{description}</strong>
          <br />
          <span className="highlight-features">{tags}</span>
        </p>
        <ul>
          {points.map(point => (
            <li key={point}>
              <FontAwesomeIcon icon={faCheck} />
              {point}
            </li>
          ))}
        </ul>
        <a href={href} target="_blank" className="see-more">
          {buttonLabel}
        </a>
      </div>
    </article>
  );
};

export default BigArticle;
