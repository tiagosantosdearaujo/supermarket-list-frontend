import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, Subtitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  HomeScreenContainer,
  HomeScreenContentContainer,
  ShoppingBagImage,
  HomeScreenInputContainer,
  HomeScreenButton
} from './styles.js'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('username deve conter mais do que 3 caracteres')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <HomeScreenContainer>
      <HomeScreenContentContainer>
        <ShoppingBagImage />
        <Title marginBotton={1.089}>
          Sua lista de supermercado mais fácil do que nunca
        </Title>
        <Subtitle alignItems={'center'} marginBotton={8.878}>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>
        <Subtitle marginBotton={4.638} alignItems={'left'} Widht={81.886}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>
        <HomeScreenInputContainer>
          <Input
            onChange={(text) => setUsername(text)}
            value={username}
            label="Username"
            placeholder="Jose Galinha"
          />
        </HomeScreenInputContainer>
        <HomeScreenButton>
          <Button onClick={onClickContinue}>Acessar</Button>
        </HomeScreenButton>
      </HomeScreenContentContainer>
    </HomeScreenContainer>
  )
}
