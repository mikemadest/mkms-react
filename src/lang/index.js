import enTexts from './en.json';
import frTexts from './fr.json';

function getTranslations(locale) {
  switch (locale) {
    case 'en': {
      return enTexts;
    }
    case 'fr': {
      return frTexts;
    }
    default: {
      return {};
    }
  }
}

export default getTranslations;
