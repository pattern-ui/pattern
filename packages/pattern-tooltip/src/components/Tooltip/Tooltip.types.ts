import { Placement } from '@floating-ui/react-dom-interactions';
import { DefaultProps, Selectors, PatternNumberSize, PatternColor } from '@pattern-ui/styles';
import useStyles, { TooltipStylesParams } from './Tooltip.styles';

export type TooltipStylesNames = Selectors<typeof useStyles>;

export interface TooltipBaseProps
  extends DefaultProps<TooltipStylesNames, TooltipStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element (default) or mouse (floating) */
  position?: Placement;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Tooltip label */
  label: React.ReactNode;

  /** Determines whether tooltip should be rendered within Portal */
  withinPortal?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: PatternNumberSize;

  /** Key of theme.colors */
  color?: PatternColor;

  /** Defines whether content should be wrapped on to the next line */
  multiline?: boolean;

  /** Tooltip width in px */
  width?: number | 'auto';

  /** Tooltip z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Disables tooltip */
  disabled?: boolean;
}
