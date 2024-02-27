import styled, { css } from 'styled-components';

export const WrapperProperty = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
    `};
  }
`;

export const ImagesSlot = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainFigure = styled.div`
  margin-right: 10px;
  figure {
    height: 100%;
  }

  img {
    border-top-left-radius: 12px;
    @media (max-width: 768px) {
      border-radius: 12px;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const Figures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
  figure {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 768px) {
        border-radius: 12px;
      }
    }
  }
`;

export const InfoSection = styled.section`
  margin-top: 20px;
  h3 {
    font-size: 1.2rem;
  }
  h3,
  span,
  p {
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
    `};
  }
  div {
    margin: 10px 0;
  }

  p {
    line-height: 1.5;
  }
`;
