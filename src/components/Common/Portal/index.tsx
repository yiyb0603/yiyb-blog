import { ReactNode } from 'react';

type PortalProps = {
  portalId: string;
  children: ReactNode;
}

const Portal = ({
  portalId,
  children,
}: PortalProps): JSX.Element => {
  const portalElement = document.getElementById(portalId);

  if (portalElement === null) {
    return <></>;
  }

  return <>{children}</>;
}

export default Portal;