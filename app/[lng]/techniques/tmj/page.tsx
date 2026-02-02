import type { Metadata } from 'next';
import TMJ from '../../../pages/techniques/TMJ';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "TMJ / TMD Treatment | Yonsei Chiropractic Clinic",
    ko: "턱관절 (TMJ/TMD) 치료 | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Specialized chiropractic care for Temporomandibular Joint Disorders and related jaw tension in Los Angeles.",
    ko: "로스앤젤레스 턱관절 통증 및 장애 전문 연세 카이로프랙틱의 치료 안내입니다."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <TMJ lng={lng} initialIsMobile={initialIsMobile} />;
}
