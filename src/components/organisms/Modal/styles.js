import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100vh;
  background-color: white;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
`
export const ModalInputContainer = styled.div`
  width: 90%;
  height: 8%;

  margin-left: 24px;
`

export const ButonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 216%;
`

export const ButtonsContent = styled.div`
  height: 48px;
`
export const ModalCloseButton = styled.button.attrs({
  URL: '/images/close.svg'
})`
  width: 24px;
  height: 24px;

  border: none;

  background-color: transparent;
  background-image: url('/images/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
`
