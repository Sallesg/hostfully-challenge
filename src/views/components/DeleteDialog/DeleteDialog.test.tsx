import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DeleteDialog } from './DeleteDialog';

describe('DeleteDialog', () => {
  it('should render dialog with cancel and confirm buttons', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<DeleteDialog onCancel={onCancel} onConfirm={onConfirm} />);

    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    const confirmButton = screen.getByRole('button', { name: /Confirm/i });

    expect(cancelButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  it('should call onCancel when cancel button is clicked', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<DeleteDialog onCancel={onCancel} onConfirm={onConfirm} />);

    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('should call onConfirm when confirm button is clicked', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<DeleteDialog onCancel={onCancel} onConfirm={onConfirm} />);

    const confirmButton = screen.getByRole('button', { name: /Confirm/i });
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onCancel).not.toHaveBeenCalled();
  });
});
