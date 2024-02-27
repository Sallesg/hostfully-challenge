import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 3%;
  max-width: 1080px;
  width: 1080px;
  margin: 0 auto;
  color: white;
  @media (max-width: 768px) {
    max-width: 420px;
    width: 420px;
  }
`;

export const WrapperBooking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 6px;
  border: none;
  margin: 0 6px;
  cursor: pointer;
`;
