import { useTranslation } from 'react-i18next';

export const useNavbarConstants = () => {
  const { t } = useTranslation();

  const techniques = [
    { name: t('nav.aboutChiropractic'), path: '/techniques/about-chiropractic' },
    { name: t('nav.subluxation'), path: '/techniques/subluxation' },
    { name: t('nav.innateIntelligence'), path: '/techniques/innate-intelligence' },
    { name: t('nav.upperCervical'), path: '/techniques/upper-cervical' },
    { name: t('nav.carAccident'), path: '/techniques/car-accident' },
    { name: t('nav.tmj'), path: '/techniques/tmj' },
  ];

  const aboutLinks = [
    { name: t('nav.aboutDrPark'), path: '/about' },
    { name: t('nav.philosophy'), path: '/message' },
  ];

  return { techniques, aboutLinks };
};
