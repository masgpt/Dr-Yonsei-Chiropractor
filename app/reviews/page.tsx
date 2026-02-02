import type { Metadata } from 'next';
import Reviews from '../pages/Reviews';

export const metadata: Metadata = {
  title: "Patient Reviews | Yonsei Chiropractic Clinic",
  description: "Read what our patients have to say about their recovery and wellness journey with Dr. Hyeon Joo Park. Specialized in Upper Cervical care in Los Angeles.",
  openGraph: {
    title: "Patient Reviews | Yonsei Chiropractic Clinic",
    description: "Read what our patients have to say about their recovery and wellness journey with Dr. Hyeon Joo Park. Specialized in Upper Cervical care in Los Angeles.",
    url: "https://yonseichiro.com/reviews",
  },
};

export default function Page() {
  return <Reviews />;
}
