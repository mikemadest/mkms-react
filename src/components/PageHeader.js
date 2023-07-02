import {useState, useEffect} from 'react';
import {useIntl} from 'react-intl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import getContents from '../config';
import LanguageSelector from './LanguageSelector';

const PageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {locale} = useIntl();
  const {menu} = getContents(locale);

  const onScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // setting up event listeners
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
                {item.label}
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

export default PageHeader;
