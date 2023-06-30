import {IntlProvider, FormattedMessage, useIntl} from 'react-intl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import getTranslations from './lang';
import {recentWorks, olderWorks} from './config';
import PageHeader from './components/PageHeader';
import BigArticle from './components/BigArticle';
import BigBanner from './components/BigBanner';
import SmallArticle from './components/SmallArticle';
import About from './components/About';

function App() {
  const {formatMessage} = useIntl();
  return (
    <>
      <PageHeader />
      <BigBanner />
      <About />

      <section id="recent-work" className="work-articles">
        <h2>
          <FormattedMessage id="mkms.nav.recentwork" />
        </h2>

        <div className="work-container">
          {recentWorks.map(article => {
            const points = formatMessage({id: article.points}).split('|');
            return (
              <BigArticle
                key={article.title}
                title={formatMessage({id: article.title})}
                image={article.smallImage}
                href={article.href}
                description={formatMessage({id: article.presentation})}
                tags={formatMessage({id: article.tags})}
                points={points}
                buttonLabel={article.linkLabel && formatMessage({id: article.linkLabel})}
              />
            );
          })}
        </div>
      </section>

      <section id="older-work" className="work-articles">
        <h2>More projects</h2>

        <div className="smaller-article-row">
          {olderWorks.map(article => {
            return (
              <SmallArticle
                key={article.title}
                title={formatMessage({id: article.title})}
                image={article.smallImage}
                href={article.href}
                description={formatMessage(
                  {
                    id: article.presentation,
                  },
                  {bold: chunks => <strong>{chunks}</strong>}
                )}
                tags={formatMessage({id: article.tags})}
                buttonLabel={article.linkLabel && formatMessage({id: article.linkLabel})}
              />
            );
          })}
        </div>
      </section>
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
