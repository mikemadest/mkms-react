import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Article from './Article';
import ArticleType from './article.type';

const Section = (props) => {
  const { items, isSmall, titleId, id } = props;
  const itemClassName = isSmall ? 'small-row' : 'normal-row';

  return (
    <section id={id} className="work-articles">
      <h2>
        <FormattedMessage id={titleId} />
      </h2>

      <div className={itemClassName}>
        {items.map((article) => {
          const points = article.points?.split('|') || null;
          return (
            <Article
              key={article.title}
              title={article.title}
              image={article.image}
              href={article.href}
              description={article.description}
              imageAlt={article.imageAlt}
              tags={article.tags}
              points={points}
              buttonLabel={article.linkLabel}
              isSmall={isSmall}
            />
          );
        })}
      </div>
    </section>
  );
};

Section.defaultProps = {
  isSmall: false
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({ ...ArticleType, points: PropTypes.string }))
};

export default Section;
