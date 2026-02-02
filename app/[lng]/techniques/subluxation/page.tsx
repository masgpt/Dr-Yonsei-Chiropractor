import Subluxation from '../../../pages/techniques/Subluxation';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Subluxation initialIsMobile={initialIsMobile} />;
}
