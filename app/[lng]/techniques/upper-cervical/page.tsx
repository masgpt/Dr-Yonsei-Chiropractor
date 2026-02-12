import type { Metadata } from 'next';
import UpperCervical from '../../../pages/techniques/UpperCervical';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Palmer Upper Cervical Specific (H.I.O.) | Yonsei Chiropractic",
    ko: "상경추 교정법 (H.I.O) | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "The Hole-In-One (H.I.O) technique focuses on the atlas and axis to restore full body health. Specialized chiropractic care in Los Angeles.",
    ko: "로스앤젤레스 상경추 전문 연세 카이로프랙틱의 H.I.O. 교정법 안내입니다."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <UpperCervical lng={lng} initialIsMobile={initialIsMobile} />;
}
