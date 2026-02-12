import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export const useNavbarConstants = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const paramLng = params?.lng;
  const lng = (paramLng === 'en' || paramLng === 'ko' ? paramLng : i18n.language) || 'en';

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
    { name: t('nav.reviews'), path: `/${lng}/reviews` },
  ];

  return { techniques, aboutLinks, lng };
};
