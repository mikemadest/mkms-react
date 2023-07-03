import getTranslations from './index';

describe('translation files should be correct', () => {
  const englishKeys = Object.keys(getTranslations('en')).sort();
  const frenchKeys = Object.keys(getTranslations('fr')).sort();

  it('contain same number of translation keys for english and french', () => {
    expect(englishKeys.length).toBeGreaterThan(0);
    expect(frenchKeys.length).toBeGreaterThan(0);
    expect(englishKeys.length).toEqual(frenchKeys.length);
  });
  it('contain the same keys', () => {
    expect(englishKeys).toEqual(frenchKeys);
  });
  it('return empty object for bad locale', () => {
    expect(getTranslations('jp')).toEqual({});
  });
});
