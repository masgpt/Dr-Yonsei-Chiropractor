import Disclaimer from '../../pages/Legal/Disclaimer';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
    const initialIsMobile = await getInitialIsMobileFromHeaders();

    return <Disclaimer />;
}
