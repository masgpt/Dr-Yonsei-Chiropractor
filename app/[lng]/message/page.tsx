import MessageFromDrPark from '../../pages/MessageFromDrPark';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <MessageFromDrPark initialIsMobile={initialIsMobile} />;
}
