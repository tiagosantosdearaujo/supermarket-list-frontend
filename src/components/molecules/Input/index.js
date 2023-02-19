import { InputContainer, InputLabel, InputText } from './styles.js'

export const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </InputContainer>
  )
}
