import {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {Waypoint} from 'react-waypoint';
import {skills} from '../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquare} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <section id="about">
      <p className="about-content">
        <strong>Javascript, PHP developer</strong> and project manager. Creator of housing
        configurators, real estate ERP, CRM and WebGL viewers. Expertise on fronts, backs and API.
      </p>

      <Waypoint
        onEnter={() => {
          setIsScrolled(true);
        }}
        onLeave={() => {
          setIsScrolled(false);
        }}
      >
        <aside id="skills" className={isScrolled ? 'scrolled' : ''}>
          <ul>
            {skills.map(([skillTitleId, skillDescriptionId]) => (
              <li key={skillTitleId}>
                <h4>
                  <FontAwesomeIcon icon={faSquare} />
                  <FormattedMessage id={skillTitleId} />
                </h4>
                <p>
                  <FormattedMessage id={skillDescriptionId} />
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </Waypoint>
    </section>
  );
};

export default About;
