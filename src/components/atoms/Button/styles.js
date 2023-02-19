import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-family: 'Avenir Next';
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 24px;
  border: none;

  cursor: pointer;

  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.red : theme.colors.primary};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.black : theme.colors.white};
`
export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 1%;
`
