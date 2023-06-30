import {FormattedMessage} from 'react-intl';

const BigBanner = () => {
  return (
    <section id="big-banner">
      <div className="banner-content">
        <div>
          <h1>
            <FormattedMessage id="mkms.bigbanner.title" />
          </h1>
          <p>
            <FormattedMessage id="mkms.bigbanner.content" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
