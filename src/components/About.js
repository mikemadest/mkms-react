import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Waypoint } from 'react-waypoint';
import getTranslations from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale } = useIntl();
  const { skills } = getTranslations(locale);

  return (
    <section id="about">
      <p className="about-content">
        <FormattedMessage
          id="mkms.nav.about.content"
          values={{
            b: (chunks) => <strong>{chunks}</strong>
          }}
        />
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
            {skills.map(([skillTitle, skillDescription]) => (
              <li key={skillTitle}>
                <h4>
                  <FontAwesomeIcon icon={faSquare} />
                  {skillTitle}
                </h4>
                <p>{skillDescription}</p>
              </li>
            ))}
          </ul>
        </aside>
      </Waypoint>
    </section>
  );
};

export default About;
