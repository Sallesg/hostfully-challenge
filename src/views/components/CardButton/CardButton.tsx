import styled from 'styled-components';

interface CardButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  iconHoverColor: string;
  iconColor: string;
  role?: string;
}

type CardButtonStyled = {
  $iconColor: string;
  $iconHoverColor: string;
};

const CardButtonStyled = styled.button<CardButtonStyled>`
  color: ${({ $iconColor }) => $iconColor};
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  margin: 0 8px;
  &:hover {
    color: ${({ $iconHoverColor }) => $iconHoverColor};
  }
`;

export const CardButton: React.FC<CardButtonProps> = ({
  onClick,
  icon,
  iconColor,
  iconHoverColor,
  role,
}: CardButtonProps) => {
  return (
    <CardButtonStyled
      role={role}
      onClick={onClick}
      $iconColor={iconColor}
      $iconHoverColor={iconHoverColor}
    >
      {icon}
    </CardButtonStyled>
  );
};
