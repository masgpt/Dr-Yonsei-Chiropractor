import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactBanner from '../../../components/ContactBanner';
import { insights } from '../../../lib/insights-data';

type InsightPageParams = {
  lng: string;
  slug: string;
};

const supportedLanguages = ['en', 'ko'];

export async function generateStaticParams() {
  return supportedLanguages.flatMap((lng) =>
    insights.map((insight) => ({
      lng,
      slug: insight.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: InsightPageParams;
}): Promise<Metadata> {
  const { lng, slug } = params;
  const insight = insights.find((item) => item.slug === slug);
  const langKey = supportedLanguages.includes(lng) ? lng : 'en';

  if (!insight) {
    return {
      title: `Insight | Yonsei Chiropractic`,
      description: 'Yonsei Chiropractic patient insights and education articles.',
    };
  }

  return {
    title: `${insight.title[langKey]} | Yonsei Chiropractic`,
    description: insight.metaDescription[langKey],
    keywords: insight.tags,
    openGraph: {
      title: insight.title[langKey],
      description: insight.metaDescription[langKey],
      url: `https://yonseichiro.com/${langKey}/insights/${insight.slug}`,
    },
  };
}

export default function InsightPage({ params }: { params: InsightPageParams }) {
  const { lng, slug } = params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) {
    notFound();
  }

  const langKey = supportedLanguages.includes(lng) ? lng : 'en';
  const formattedDate = new Intl.DateTimeFormat(
    langKey === 'ko' ? 'ko-KR' : 'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  ).format(new Date(insight.publishedAt));

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Link
            href={`/${langKey}/insights`}
            className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2"
          >
            ← {langKey === 'ko' ? '인사이트 목록으로 돌아가기' : 'Back to insights'}
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {insight.heroBadge[langKey]}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {insight.title[langKey]}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {insight.heroSummary[langKey]}
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.4em] text-slate-500">
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{insight.tags.join(' · ')}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
          {insight.sections.map((section) => (
            <article
              key={section.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">
                {section.title[langKey]}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {section.body[langKey]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 space-y-4">
          <h2 className="text-2xl font-black">
            {langKey === 'ko' ? '마무리' : 'Final Thoughts'}
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            {insight.closingParagraph[langKey]}
          </p>
        </div>
      </section>

      <ContactBanner lng={langKey} />
    </div>
  );
}
