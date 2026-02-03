import type { Metadata } from 'next';
import CarAccident from '../../../pages/techniques/CarAccident';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Car Accident & Whiplash Recovery | Yonsei Chiropractic",
    ko: "교통사고 후유증 및 채찍질 손상 치료 | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Expert treatment for whiplash and other injuries sustained in automobile accidents. Immediate care in Los Angeles.",
    ko: "로스앤젤레스 교통사고 후유증 전문 치료. 채찍질 손상 및 만성 통증 정밀 교정 안내."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <CarAccident lng={lng} initialIsMobile={initialIsMobile} />;
}
