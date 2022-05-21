import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, checkAccessibility, patchConsoleError } from '@pattern-ui/tests';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';
import { TooltipFloating, TooltipFloatingProps } from './TooltipFloating';

const defaultProps: TooltipFloatingProps = {
  withinPortal: false,
  label: 'test-tooltip',
  children: <button type="button">test-target</button>,
};

describe('@pattern-ui/core/Tooltip', () => {
  checkAccessibility([<TooltipFloating {...defaultProps} />]);
  itSupportsSystemProps({
    component: TooltipFloating,
    props: defaultProps,
    displayName: '@pattern-ui/core/TooltipFloating',
    name: 'TooltipFloating',
  });

  it('throws error if children cannot be processed', () => {
    const TestTooltip: any = TooltipFloating;
    const error = new Error(TOOLTIP_ERRORS['tooltip-children']);
    patchConsoleError();
    expect(() => render(<TestTooltip>Hello</TestTooltip>)).toThrow(error);
    expect(() => render(<TestTooltip>{2}</TestTooltip>)).toThrow(error);
    expect(() =>
      render(
        <TestTooltip>
          <>fragment</>
        </TestTooltip>
      )
    ).toThrow(error);
    expect(() =>
      render(
        <TestTooltip>
          <div>node 1</div>
          <div>node 2</div>
        </TestTooltip>
      )
    ).toThrow(error);
    patchConsoleError.release();
  });

  it('allows to get child ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <TooltipFloating label="tooltip">
        <button type="button" ref={ref}>
          target
        </button>
      </TooltipFloating>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
