import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: 28px;

  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: #000000;

  width: ${({ Widht }) => Widht || 60}%;
  margin-bottom: ${({ marginBotton }) => marginBotton}%;
  margin-left: ${({ marginLeft }) => marginLeft || 0}%;

  @media (max-width: 767px) {
    width: ${({ Widht }) => Widht || 90}%;
    font-size: ${({ fontSize }) => fontSize || 18}px;
  }
`

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  line-height: 18px;

  color: #000000;

  width: ${({ Widht }) => Widht || 55.62}%;
  text-align: ${({ alignItems }) => alignItems || 'center'};
  margin-bottom: ${({ marginBotton }) => marginBotton}%;

  @media (max-width: 767px) {
    width: ${({ Widht }) => Widht || 90}%;
  }
`

export const SmallText = styled.span`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`
