import { useTranslation } from 'react-i18next';

export const useNavbarConstants = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language || 'en';

  const techniques = [
    { name: t('nav.aboutChiropractic'), path: `/${lng}/techniques/about-chiropractic` },
    { name: t('nav.subluxation'), path: `/${lng}/techniques/subluxation` },
    { name: t('nav.innateIntelligence'), path: `/${lng}/techniques/innate-intelligence` },
    { name: t('nav.upperCervical'), path: `/${lng}/techniques/upper-cervical` },
    { name: t('nav.carAccident'), path: `/${lng}/techniques/car-accident` },
    { name: t('nav.tmj'), path: `/${lng}/techniques/tmj` },
  ];

  const aboutLinks = [
    { name: t('nav.aboutDrPark'), path: `/${lng}/about` },
    { name: t('nav.philosophy'), path: `/${lng}/message` },
  ];

  return { techniques, aboutLinks, lng };
};
