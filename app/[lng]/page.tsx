import type { Metadata } from 'next';
import Home from '../pages/Home';
import { getInitialIsMobileFromHeaders } from '../lib/get-initial-is-mobile';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Korean Chiropractor in Los Angeles 90010 90057 | Yonsei Chiropractic",
    ko: "LA 한인 타운 카이로프랙틱 추천 | 90010 90057 | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Searching for a Korean speaking chiropractor in Los Angeles? Yonsei Chiropractic specializes in Palmer Upper Cervical care, TMJ, and car accidents in 90010 and 90057.",
    ko: "로스앤젤레스에서 한국어 가능한 카이로프랙터를 찾으시나요? 연세 카이로프랙틱은 90010, 90057 지역에서 상경추, TMJ, 교통사고 전문 치료를 제공합니다."
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
      "한인타운 정형외과 카이로프랙틱",
      "상경추 전문"
    ],
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
