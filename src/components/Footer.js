import {FormattedMessage} from 'react-intl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <p>
        <strong>MkMs</strong> - Mickaël MEAUSOONE - <FormattedMessage id="mkms.position" /> -
        <a
          href="https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
