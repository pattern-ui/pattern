import React, { useRef, useState } from 'react';
import { useDidUpdate, useInterval, useReducedMotion } from '@pattern-ui/hooks';
import { getDefaultZIndex, PatternColor } from '@pattern-ui/styles';
import { OptionalPortal } from '@pattern-ui/portal';
import { Progress } from '@pattern-ui/progress';
import { useNProgressEvents } from './events';

export interface NProgressProps {
  /** The default progress */
  defaultProgress?: number;

  /** The color of the progressbar */
  color?: PatternColor;

  /** The height of the progressbar */
  size?: number;

  /** Called when the progress is 100% */
  onFinish?: () => void;

  /** Step delay in ms */
  stepIntervalTime?: number;

  /** Transition function (transition-timing-function) */
  progressTransition?: string;

  /** Transition duration in ms */
  progressTransitionDuration?: number;

  /** The time when the component should be unmounted after progress is 100% */
  exitTimeout?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Exit transition function (transition-timing-function)*/
  exitTransition?: string;

  /** Determines whether NProgress should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** NProgress container z-index */
  zIndex?: number;
}

export function NProgress({
  defaultProgress = 0,
  color = 'blue',
  size = 2,
  stepIntervalTime = 500,
  progressTransition = 'ease',
  progressTransitionDuration = 600,
  exitTimeout = 700,
  exitTransitionDuration = 600,
  exitTransition = 'ease',
  onFinish,
  withinPortal = true,
  zIndex = getDefaultZIndex('nprogress'),
}: NProgressProps) {
  const reducedMotion = useReducedMotion();
  const [_progress, setProgress] = useState(defaultProgress);
  const [mounted, setMounted] = useState(true);
  const unmountRef = useRef<number>();

  const interval = useInterval(() => {
    setProgress((amount) => {
      let next = 0;
      if (amount >= 0 && amount <= 20) {
        next = 10;
      } else if (amount >= 20 && amount <= 50) {
        next = 4;
      } else if (amount >= 50 && amount <= 80) {
        next = 2;
      } else if (amount >= 80 && amount <= 99) {
        next = 0.5;
      }

      return amount + next;
    });
  }, stepIntervalTime);

  const cancelUnmount = () => {
    if (unmountRef.current) {
      clearTimeout(unmountRef.current);
    }
    setMounted(true);
  };

  const set = (value: React.SetStateAction<number>) => setProgress(value);
  const add = (value: number) => setProgress((c) => Math.min(c + value, 100));
  const decrease = (value: number) => setProgress((c) => Math.max(c - value, 0));
  const start = () => {
    interval.stop();
    interval.start();
  };
  const stop = () => interval.stop();
  const reset = () => {
    interval.stop();
    setProgress(0);
  };

  const ctx = {
    set,
    add,
    decrease,
    start,
    stop,
    reset,
  };

  useDidUpdate(() => {
    if (_progress >= 100) {
      stop();
      onFinish && onFinish();
      unmountRef.current = window.setTimeout(() => setMounted(false), exitTimeout);
    } else if (!mounted) {
      cancelUnmount();
    }
  }, [_progress]);

  useNProgressEvents(ctx);

  return (
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex}>
      <Progress
        radius={0}
        value={_progress}
        size={size}
        color={color}
        styles={{
          root: {
            top: 0,
            position: 'fixed',
            width: '100vw',
            backgroundColor: 'transparent',
            transitionProperty: 'opacity',
            transitionTimingFunction: exitTransition,
            transitionDuration: `${
              reducedMotion || _progress !== 100 ? 0 : exitTransitionDuration
            }ms`,
            opacity: mounted ? 1 : 0,
          },
          bar: {
            transitionProperty: 'width',
            transitionTimingFunction: progressTransition,
            transitionDuration: `${reducedMotion || !mounted ? 0 : progressTransitionDuration}ms`,
          },
        }}
      />
    </OptionalPortal>
  );
}
