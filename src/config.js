import configFr from './config.fr';
import configEn from './config.en';

function getContents(locale) {
  switch (locale) {
    case 'en': {
      return configEn;
    }
    case 'fr': {
      return configFr;
    }
    default: {
      return {};
    }
  }
}

export default getContents;
