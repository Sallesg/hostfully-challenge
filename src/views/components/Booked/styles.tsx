import styled, { css } from 'styled-components';

export const BookedWrapper = styled.div`
  width: 60%;
  border-bottom-right-radius: 12px;
  height: 80%;
  background-color: #2b2e41;
  text-align: center;
  padding: 3%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    text-decoration-color: ${theme.colors.secondary};
  `};
  text-decoration: underline;
  margin: 0 0 20px;
  font-size: 2rem;
`;

export const TextInformation = styled.div`
  font-size: 1.2rem;
  background-color: #19172a75;
  padding: 20px 10px;
  border-radius: 8px;
  span {
    color: #ffffff;
  }
`;

export const BookedCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ButtonIcon = styled.button``;
