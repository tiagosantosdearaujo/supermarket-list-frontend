import styled from 'styled-components'

export const HomeScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px;
  margin: 0px;
`
export const HomeScreenContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 552px;
  height: 96.57%;
  max-height: 720px;
  background-color: white;
  border-radius: 24px;
`
export const ShoppingBagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'shopping-bag'
})`
  width: 39.856%;
  height: 30.556%;
  margin: 13.044% 0px 4.53% 0px;
`
export const HomeScreenInputContainer = styled.div`
  width: 81.886%;
  height: 56px;
  margin: 0px 0px 4.638% 0px;

  @media (max-width: 767px) {
    width: 90%;
  }
`
export const HomeScreenButton = styled.div`
  width: 81.886%;
  height: 42px;
  min-height: 42px;
  margin: 0px 0px 13.23% 0px;

  @media (max-width: 767px) {
    width: 90%;
  }
`
