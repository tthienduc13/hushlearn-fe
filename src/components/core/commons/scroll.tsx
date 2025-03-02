'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function Scroll() {
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return <></>;
}
export default Scroll;
