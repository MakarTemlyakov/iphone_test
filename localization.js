const suppportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

const loadTranslations = async (locale) => {
  let translation = {};
  try {
    const response = await fetch(`i18n/${locale}.json`);
    translation = await response.json();
  } catch (error) {
    console.error(`Ошибка загрузки переводов: ${error}`);
  }
  return translation;
};

const getLocale = () => {
  const currentLocale = window.location.search.split('=')[1] || navigator.language;
  return suppportedLanguages.includes(currentLocale) ? currentLocale : 'en';
};

const translateMapper = (translationList) => {
  const translation = Object.values(translationList);
  return {
    getUnlimitedAccess: translation[0],
    unlimitedArtCreation: translation[1],
    exclusiveStyles: translation[2],
    magicAvatarsWith20Off: translation[3],
    yarlyAccess: translation[4],
    bestOffer: translation[5],
    justPricePerYear: translation[6],
    weaklyAccess: translation[7],
    pricePerWeek: translation[8],
    termsofUse: translation[9],
    privacyPolicy: translation[10],
    restore: translation[11],
    continue: translation[12],
  };
};

const getTranslation = async () => {
  const locale = getLocale();
  const translations = await loadTranslations(locale);
  return translateMapper(translations);
};

const translation = await getTranslation();

export { translation, getLocale };
