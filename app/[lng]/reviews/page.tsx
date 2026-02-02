import type { Metadata } from 'next';
import Reviews from '../../pages/Reviews';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: "Patient Reviews | Yonsei Chiropractic Clinic",
    ko: "환자 후기 | 연세 카이로프랙틱"
  };
  
  const descriptions: Record<string, string> = {
    en: "Read what our patients have to say about their recovery and wellness journey with Dr. Hyeon Joo Park. Specialized in Upper Cervical care in Los Angeles.",
    ko: "박현주 원장님의 상부경추 교정을 통해 회복된 환자분들의 생생한 후기를 확인해 보세요."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
    openGraph: {
      title: titles[lng] || titles.en,
      description: descriptions[lng] || descriptions.en,
      url: `https://yonseichiro.com/${lng}/reviews`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return <Reviews lng={lng} />;
}
