import styled from 'styled-components';

export default {
  fonts: {
    mobile: '1.4rem',
    desktop: '2rem',
  },
  colors: {
    primary: '#2b2e41',
    secondary: '#FFFFFF',
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  bgColors: {
    primary: '#C2C2C2',
    secondary: '#FFFFFF',
  },
};

export const ButtonIcon = styled.button`
  background-color: transparent;
  padding: 6px;
  border: none;
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #777777;
    cursor: not-allowed;
  }
`;

// font-family: "Roboto", sans-serif;
// max-width: 1360px;
// #FFC454
//#19172A75
// #C2C2C2
// #FFFFFF
// #8A5BDA
// #FF7254
// #777777
// #40CAA1
// #2D2AA5
// #19172A
