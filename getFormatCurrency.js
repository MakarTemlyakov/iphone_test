import { getLocale } from './localization';

const currencies = {
  en: 'USD',
  de: 'EUR',
  ja: 'JPY',
  es: 'EUR',
  fr: 'EUR',
  pt: 'EUR',
};

const getFormatCurrencyByLocale = (price) => {
  const locale = getLocale();
  const currency = currencies[locale] || 'USD';
  return new Intl.NumberFormat(locale, { currency: currency, style: 'currency' }).format(price);
};

export { getFormatCurrencyByLocale };
