import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  border-style: solid;
  margin-bottom: 22px;
`
export const InputLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 5px 16px;
`

export const InputText = styled.input`
  width: 100%;
  border: none transparent;
  padding: 0px 16px;
  box-sizing: border-box;

  font-family: 'Avenir Next';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  :focus {
    outline: none;
  }
`
