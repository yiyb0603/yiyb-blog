type Global = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';

export type Position = Global | 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

export type FlexWrap = Global | 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexDirection = Global | 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type JustifyContent = Global | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';

export type AlignItems = Global | 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';

export type Cursor = Global | 'default' | 'pointer';

export type Display = Global | 'none' | 'hidden' | 'block' | 'inline' | 'inline-block' | 'flex' | 'grid';

export type TextAlign = Global | 'start' | 'center' | 'end' | 'left' | 'right';

export type Overflow = Global | 'scroll' | 'hidden' | 'auto' | 'visible';

export type Visibility = Global | 'collapse' | 'visible' | 'hidden';

type BorderValue = `${number}px solid ${string}`;

export type CustomBorder = {
  all?: BorderValue;
  top?: BorderValue;
  left?: BorderValue;
  right?: BorderValue;
  bottom?: BorderValue;
}