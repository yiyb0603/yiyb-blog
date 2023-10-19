import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import isServer from '@/utils/is-packages/isServer';

type PortalProps = {
  portalId: string;
  children: ReactNode;
};

const Portal = ({ portalId, children }: PortalProps): JSX.Element => {
  const portalElement = isServer() ? null : document.getElementById(portalId);

  if (portalElement === null) {
    return <></>;
  }

  return createPortal(children, portalElement);
};

export default Portal;
