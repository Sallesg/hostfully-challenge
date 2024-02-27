// DeleteConfirmationDialog.tsx
import React from 'react';
import styled from 'styled-components';

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

interface DeleteConfirmationDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteDialog: React.FC<DeleteConfirmationDialogProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <DialogWrapper>
      <DialogBox>
        <p>Are you sure you want to delete this event?</p>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </DialogBox>
    </DialogWrapper>
  );
};
