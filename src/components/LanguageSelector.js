import {useIntl} from 'react-intl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLanguage} from '@fortawesome/free-solid-svg-icons';

const LanguageSelector = () => {
  const {locale} = useIntl();
  return (
    <div className="language-selector">
      <FontAwesomeIcon icon={faLanguage} />
      {locale === 'en' ? <a href="/fr">Français</a> : <a href="/en">english</a>}
    </div>
  );
};

export default LanguageSelector;
