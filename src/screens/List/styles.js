import styled from 'styled-components'

export const ListScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px;
  margin: 0px;
`

export const ListScreenContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  max-width: 1128px;
  height: 90%;
  max-height: 824px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 4.862% 6.667% 4.028% 6.667%;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 95%;
    height: 95%;
  }
`

export const ListScreenHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.6%;

  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ListScreenHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  width: 100%;
  max-width: 500px;
`

export const ListScreenHeaderButton = styled.div`
  width: 160px;
  height: 42px;
`

export const ListScreenHeaderLogoImage = styled.img.attrs({
  src: '/images/logo.png',
  alt: 'supermarket-list-logo'
})`
  width: 17.332%;
  height: 55.11%;
  align-self: center;

  @media (max-width: 767px) {
    display: none;
  }
`

export const ListScreenListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 934px;
  height: 90%;

  overflow-y: scroll;
`
