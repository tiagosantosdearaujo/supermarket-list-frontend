import styled from 'styled-components'

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 100%;
  max-height: 58px;

  background-color: #f2f4ff;
  border-radius: 12px;
  margin-bottom: 12px;

  box-sizing: border-box;
  padding: 8px 16px;
  gap: 16px;
`
export const ListCardTextContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const ListCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`
export const Checkbox = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
`

export const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 10%;
  cursor: pointer;
`
export const ArrowIcon = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: 'arrow-icon'
})`
  width: 6px;
  height: 12px;
  object-fit: contain;
`
