import { IntlProvider, useIntl } from 'react-intl';
import getTranslations from './lang';
import getContents from './config';
import PageHeader from './components/PageHeader';
import BigBanner from './components/BigBanner';
import Section from './components/Section';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const { locale } = useIntl();
  const { mediumArticles, recentWorks, olderWorks } = getContents(locale);
  return (
    <>
      <PageHeader />
      <BigBanner />
      <About />

      <Section id="medium-articles" items={mediumArticles} titleId="mkms.nav.mediumArticles" />
      <Section id="recent-work" items={recentWorks} titleId="mkms.nav.recentwork" />
      <Section id="older-work" items={olderWorks} titleId="mkms.section.moreProjects" isSmall />

      <Footer />
    </>
  );
}

const AppWrapper = () => {
  const languageChoice = window.location.href.includes('/fr') ? 'fr' : 'en';
  return (
    <IntlProvider locale={languageChoice} messages={getTranslations(languageChoice)}>
      <App languageChoice={languageChoice} />
    </IntlProvider>
  );
};

export default AppWrapper;
