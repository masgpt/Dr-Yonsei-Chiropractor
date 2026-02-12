import type { Metadata } from 'next';
import Services from '../../pages/Services';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Our Services | Yonsei Chiropractic Los Angeles",
    ko: "전문 진료 분야 | 상경추 전문 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Specialized Palmer Upper Cervical (H.I.O) method, TMJ treatment, and car accident recovery services in Los Angeles.",
    ko: "로스앤젤레스 상경추 정밀 교정(H.I.O), 턱관절 장애, 교통사고 후유증 및 각종 관절 통증 전문 치료 안내."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Services lng={lng} initialIsMobile={initialIsMobile} />;
}
