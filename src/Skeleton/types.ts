import { CSSProperties, HTMLAttributes } from 'react';

export type SkeletonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface SkeletonBaseProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton (number = px, string = raw CSS value) */
  width?: number | string;
  /** Height of the skeleton (number = px, string = raw CSS value) */
  height?: number | string;
  /** Border radius preset */
  rounded?: SkeletonRounded;
  /** Additional CSS class names */
  className?: string;
  /** Custom shimmer color (the moving highlight) */
  shimmerColor?: string;
  /** Custom background color (the base) */
  baseColor?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Inline style overrides */
  style?: CSSProperties;
}

export interface SkeletonTextProps extends SkeletonBaseProps {
  /** Render as a text-line placeholder */
  text: true;
  circle?: never;
  block?: never;
  size?: never;
}

export interface SkeletonCircleProps extends SkeletonBaseProps {
  /** Render as a circle (avatar placeholder) */
  circle: true;
  /** Circle diameter (number = px, string = raw CSS value) */
  size?: number | string;
  text?: never;
  block?: never;
}

export interface SkeletonBlockProps extends SkeletonBaseProps {
  /** Render as a full-width block placeholder */
  block: true;
  text?: never;
  circle?: never;
  size?: never;
}

export interface SkeletonDefaultProps extends SkeletonBaseProps {
  text?: never;
  circle?: never;
  block?: never;
  size?: never;
}

export type SkeletonProps =
  | SkeletonTextProps
  | SkeletonCircleProps
  | SkeletonBlockProps
  | SkeletonDefaultProps;
