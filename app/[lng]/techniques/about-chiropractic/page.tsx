import AboutChiropractic from '../../../pages/techniques/AboutChiropractic';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <AboutChiropractic initialIsMobile={initialIsMobile} />;
}
