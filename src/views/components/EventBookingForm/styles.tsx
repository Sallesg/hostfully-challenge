import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 3%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 40%;
  height: 80%;
  border-bottom-left-radius: 12px;
  justify-content: space-between;
  align-items: space-between;

  form {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration-color: ${theme.colors.primary};
  `};
  text-decoration: underline;
  text-align: center;
  margin: 0 0 20px;
  font-size: 2rem;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;

  label {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `};
    display: block;
    margin-bottom: 6px;
    font-weight: 400;
  }

  input {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `};
    width: 100%;
    padding: 12px;
    border: 1px solid #6271eb;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus,
    &:hover {
      border-color: #6271eb;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
`;

export const ButtonWrapper = styled.div<{ steps: number }>`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #777777;
    cursor: not-allowed;
  }
`;

export const FillBar = styled.div<{ steps: number }>`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #40caa1;
  height: 8px;
  width: ${({ steps }) => (steps === 1 ? '50%' : steps === 2 && '100%')};
  transition: width 0.5s ease;
  margin-top: -4px;
`;

export const PriceText = styled.div``;
