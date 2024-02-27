import React, { useEffect, useState } from 'react';
import {
  useEventContext,
  IBooking,
} from '@app/contexts/EventContext/EventContext';
import styled from 'styled-components';
import { DeleteDialog } from '../DeleteDialog/DeleteDialog';
import { Edit, Trash, CheckSquare, XSquare } from 'react-feather';
import { CardButton } from '../CardButton/CardButton';
import { formatDateVanilla } from '@app/utils/FormatDateVanilla';

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

interface BookedCardProps {
  booking: IBooking;
}

export const BookedCard: React.FC<BookedCardProps> = ({ booking }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState<IBooking | null>(null);
  const { deleteBooking, updateBooking } = useEventContext();

  useEffect(() => {
    setEditedEvent(booking);
  }, [booking]);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
    setEditedEvent({ ...booking });
  };

  const handleConfirmDelete = () => {
    if (booking.id) {
      deleteBooking(booking.id);
      setShowDeleteDialog(false);
    }
  };

  const handleSaveClick = () => {
    if (editedEvent && editedEvent.id) {
      updateBooking(editedEvent.id, editedEvent);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedEvent(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedEvent) {
      const { name, value } = e.target;
      setEditedEvent((prevState) => ({
        ...prevState!,
        [name]:
          name === 'checkIn' || name === 'checkOut' ? new Date(value) : value,
      }));
    }
  };

  return (
    <CardWrapper>
      {isEditing ? (
        <>
          <Input
            type="date"
            name="checkIn"
            value={editedEvent?.checkIn.toString().slice(0, 10)}
            onChange={handleInputChange}
          />
          <Input
            type="date"
            name="checkOut"
            value={editedEvent?.checkOut.toString().slice(0, 10)}
            onChange={handleInputChange}
          />

          <CardButton
            role="button-confirm-edit"
            onClick={handleSaveClick}
            icon={<CheckSquare />}
            iconColor={'#51CA73'}
            iconHoverColor="#3F9E5E"
          />
          <CardButton
            role="button-cancel-edit"
            onClick={handleCancelEdit}
            icon={<XSquare />}
            iconColor={'#FC5050'}
            iconHoverColor="#F63131"
          />
        </>
      ) : (
        <>
          <div>
            <p>Period:</p>
            <span>{formatDateVanilla(booking.checkIn)} - </span>
            <span>{formatDateVanilla(booking.checkOut)}</span>
          </div>
          <div>
            <p>Total Price:</p>
            <span>{booking.price}</span>
          </div>
          <div>
            <CardButton
              role="button-save"
              onClick={handleUpdateClick}
              icon={<Edit />}
              iconColor={'#51CA73'}
              iconHoverColor="#3F9E5E"
            />
            <CardButton
              role="button-delete"
              onClick={handleDeleteClick}
              icon={<Trash />}
              iconColor={'#FC5050'}
              iconHoverColor="#F63131"
            />
          </div>
        </>
      )}
      {showDeleteDialog && (
        <DeleteDialog
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </CardWrapper>
  );
};
