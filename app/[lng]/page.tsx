import type { Metadata } from 'next';
import Home from '../pages/Home';
import { getInitialIsMobileFromHeaders } from '../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Upper Cervical Health Care | Yonsei Chiropractic Clinic",
    ko: "상부경추 전문 연세 카이로프랙틱 | Dr. Park"
  };
  
  const descriptions: Record<string, string> = {
    en: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing.",
    ko: "로스앤젤레스에 위치한 상부경추 전문 연세 카이로프랙틱입니다. TMJ, 교통사고, 자연 치유 전문."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
    openGraph: {
      title: titles[lng] || titles.en,
      description: descriptions[lng] || descriptions.en,
      url: `https://yonseichiro.com/${lng}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Home lng={lng} initialIsMobile={initialIsMobile} />;
}
