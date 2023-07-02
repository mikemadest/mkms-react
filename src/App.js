import {IntlProvider, FormattedMessage, useIntl} from 'react-intl';
import getTranslations from './lang';
import getContents from './config';
import PageHeader from './components/PageHeader';
import BigBanner from './components/BigBanner';
import Article from './components/Article';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const {locale} = useIntl();
  const {mediumArticles, recentWorks, olderWorks} = getContents(locale);
  return (
    <>
      <PageHeader />
      <BigBanner />
      <About />

      <section id="recent-work" className="work-articles">
        <h2>
          <FormattedMessage id="mkms.nav.mediumArticles" />
        </h2>

        <div className="work-container">
          {mediumArticles.map(article => {
            const points = article.points.split('|');
            return (
              <Article
                key={article.title}
                title={article.title}
                image={article.smallImage}
                href={article.href}
                description={article.presentation}
                tags={article.tags}
                points={points}
                buttonLabel={article.linkLabel}
              />
            );
          })}
        </div>
      </section>

      <section id="recent-work" className="work-articles">
        <h2>
          <FormattedMessage id="mkms.nav.recentwork" />
        </h2>

        <div className="work-container">
          {recentWorks.map(article => {
            const points = article.points.split('|');
            return (
              <Article
                key={article.title}
                title={article.title}
                image={article.smallImage}
                href={article.href}
                description={article.presentation}
                tags={article.tags}
                points={points}
                buttonLabel={article.linkLabel}
              />
            );
          })}
        </div>
      </section>

      <section id="older-work" className="work-articles">
        <h2>
          <FormattedMessage id="mkms.section.moreProjects" />
        </h2>

        <div className="smaller-article-row">
          {olderWorks.map(article => {
            return (
              <Article
                isSmall
                key={article.title}
                title={article.title}
                image={article.smallImage}
                href={article.href}
                description={article.presentation}
                tags={article.tags}
                buttonLabel={article.linkLabel}
              />
            );
          })}
        </div>
      </section>

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
