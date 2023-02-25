import { css, FlattenSimpleInterpolation } from 'styled-components';

export const disableDrag = css`
  user-select: none;
  -webkit-user-drag: none;
`;

export const ellipsisLine = (line: number, maxWidth?: string): FlattenSimpleInterpolation => css`
  max-width: ${maxWidth};
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;