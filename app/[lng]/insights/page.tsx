import type { Metadata } from 'next';
import Insights from '../../pages/Insights';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Korean Speaking Chiropractor near Los Angeles 90010, 90057 | Yonsei Chiropractic",
    ko: "LA 한인 카이로프랙틱 추천 | 90010, 90057 지역 | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Looking for a Korean chiropractor near you in LA? We provide expert chiropractic care for the Korean community in 90010, 90057, specializing in Upper Cervical and TMJ.",
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
    keywords: [
      "Korean chiropractor",
      "Korean speaking chiropractor Los Angeles",
      "Chiropractor 90010",
      "Chiropractor 90057",
      "LA 한인 카이로프랙틱",
      "한인타운 척추신경 카이로프랙틱",
      "상부경추 전문",
      "상경추 전문"
    ],
    openGraph: {
      title: titles[lng] || titles.en,
      description: descriptions[lng] || descriptions.en,
      url: `https://yonseichiro.com/${lng}/insights`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return <Insights lng={lng} />;
}
