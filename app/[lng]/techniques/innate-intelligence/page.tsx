import InnateIntelligence from '../../../pages/techniques/InnateIntelligence';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <InnateIntelligence initialIsMobile={initialIsMobile} />;
}
