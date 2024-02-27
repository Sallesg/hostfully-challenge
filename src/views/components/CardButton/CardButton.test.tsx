import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CardButton } from './CardButton';
describe('CardButton', () => {
  it('should render button with icon and apply styles correctly', () => {
    const onClickMock = vi.fn();
    const icon = <span>Icon</span>;
    const iconColor = 'rgb(255, 0, 0)';
    const iconHoverColor = 'rgb(255, 0, 0)';

    render(
      <CardButton
        onClick={onClickMock}
        icon={icon}
        iconColor={iconColor}
        iconHoverColor={iconHoverColor}
      />,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`color: rgb(255, 0, 0)`);
    expect(button).toHaveStyle(`border: none`);
    expect(button).toHaveStyle(`padding: 4px`);
    expect(button).toHaveStyle(`cursor: pointer`);
    expect(button).toHaveStyle(`margin: 0 8px`);

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle(`color: ${iconHoverColor}`);

    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle(`color: ${iconColor}`);

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
