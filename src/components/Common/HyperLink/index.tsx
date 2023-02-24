import { ReactNode, RefObject, AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { CustomBorder } from '@/types/style';

type HyperLinkOwnProps = {
  external: boolean;
  hyperLinkRef?: RefObject<HTMLAnchorElement>;
  link?: LinkProps;
  anchor?: AnchorHTMLAttributes<HTMLAnchorElement>;
  children?: ReactNode;
}

type HyperLinkStyleProps = {
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  border?: CustomBorder;
  fontSize?: string;
  fontFamily?: string;
  hover?: FlattenSimpleInterpolation;
}

type HyperLinkProps = HyperLinkOwnProps &
  HyperLinkStyleProps

const HyperLink = ({
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
      passHref
    >
      <CustomHyperLink
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