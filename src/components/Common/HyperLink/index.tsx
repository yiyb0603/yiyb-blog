import { ReactNode, RefObject, AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { CustomBorder, Display } from '@/types/style';

type HyperLinkStyleProps = {
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  border?: CustomBorder;
  fontSize?: string;
  fontFamily?: string;
  display?: Display;
  hover?: FlattenSimpleInterpolation;
}

type HyperLinkOwnProps = {
  className?: string;
  external: boolean;
  hyperLinkRef?: RefObject<HTMLAnchorElement>;
  link?: LinkProps;
  anchor?: AnchorHTMLAttributes<HTMLAnchorElement>;
  children?: ReactNode;
}

type HyperLinkProps = HyperLinkOwnProps &
  HyperLinkStyleProps

const HyperLink = ({
  className,
  external,
  hyperLinkRef,
  link,
  anchor,
  children,
  ...props
}: HyperLinkProps): JSX.Element => {
  if (external) {
    return (
      <CustomHyperLink
        className={className}
        ref={hyperLinkRef}
        {...anchor}
        {...props}
      >
        {children}
      </CustomHyperLink>
    );
  }

  return (
    <Link
      {...link!}
      legacyBehavior
      passHref
    >
      <CustomHyperLink
        className={className}
        ref={hyperLinkRef}
        {...anchor}
        {...props}
      >
        {children}
      </CustomHyperLink>
    </Link>
  );
}

const CustomHyperLink = styled.a<HyperLinkStyleProps>`
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border?.all};
  border-top: ${({ border }) => border?.top};
  border-left: ${({ border }) => border?.left};
  border-right: ${({ border }) => border?.right};
  border-bottom: ${({ border }) => border?.bottom};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};

  ${({ theme }) => theme.media.hoverable} {
    &:hover {
      ${({ hover }) => hover};
    }
  };
`;

export default HyperLink;