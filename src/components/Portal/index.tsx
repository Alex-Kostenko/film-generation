import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from '@/interfaces';

import { Overlay } from './style';

export const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<Overlay>{props.children}</Overlay>, ref.current)
    : null;
};
