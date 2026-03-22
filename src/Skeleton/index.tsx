import { forwardRef } from 'react';
import type { SkeletonProps, SkeletonRounded } from './types';
import './skeleton.css';

function cx(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

function toCssValue(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

const roundedClass: Record<SkeletonRounded, string> = {
  none: 'skeletonix--rounded-none',
  sm: 'skeletonix--rounded-sm',
  md: 'skeletonix--rounded-md',
  lg: 'skeletonix--rounded-lg',
  xl: 'skeletonix--rounded-xl',
  full: 'skeletonix--rounded-full',
};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    width,
    height,
    rounded,
    className,
    shimmerColor,
    baseColor,
    duration,
    style,
    text,
    circle,
    block,
    ...rest
  } = props as SkeletonProps & { text?: boolean; circle?: boolean; block?: boolean; size?: number | string };

  const size = (props as any).size;

  const isText = text === true;
  const isCircle = circle === true;
  const isBlock = block === true;

  const cssVars: Record<string, string | undefined> = {};
  if (shimmerColor) cssVars['--skeletonix-shimmer'] = shimmerColor;
  if (baseColor) cssVars['--skeletonix-base'] = baseColor;
  if (duration) cssVars['--skeletonix-duration'] = `${duration}s`;

  const inlineStyle: React.CSSProperties = {
    ...cssVars as any,
    ...style,
  };

  // Apply width/height from props or shortcut defaults
  if (isCircle) {
    const d = toCssValue(size ?? width ?? 48);
    inlineStyle.width = d;
    inlineStyle.height = d;
  } else {
    if (width !== undefined) inlineStyle.width = toCssValue(width);
    if (height !== undefined) inlineStyle.height = toCssValue(height);
  }

  const classes = cx(
    'skeletonix',
    isText && 'skeletonix--text',
    isCircle && 'skeletonix--circle',
    isBlock && 'skeletonix--block',
    rounded && roundedClass[rounded],
    className,
  );

  return (
    <div
      ref={ref}
      className={classes}
      style={inlineStyle}
      aria-hidden="true"
      {...rest}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
export type { SkeletonProps, SkeletonRounded } from './types';
export type {
  SkeletonBaseProps,
  SkeletonTextProps,
  SkeletonCircleProps,
  SkeletonBlockProps,
  SkeletonDefaultProps,
} from './types';
