import {useState, useEffect} from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {menu} from '../config';
import LanguageSelector from './LanguageSelector';

const PageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // setting up event listeners
    // clean up code
    window.addEventListener('scroll', onScroll, {passive: true});

    // cleanup on unmount
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <a href="#" className="basename">
        <strong>MkMs</strong> - Mickaël MEAUSOONE
      </a>

      <nav>
        <ul>
          {menu.map(item => (
            <li key={item.link} className="menu-item">
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} />
                <FormattedMessage id={item.label} />
              </a>
            </li>
          ))}

          <li className="menu-item">
            <a
              href="https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </li>

          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
};

PageHeader.defaultProps = {
  isScrolled: false,
};

PageHeader.propTypes = {
  isScrolled: PropTypes.bool,
};

export default PageHeader;
