import { useEffect, useState } from 'react'
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalInputContainer,
  ButonsContainer,
  ButtonsContent,
  ModalCloseButton
} from './styles.js'
import { Input, Button, Title } from 'components'
import { createItem, updateItem, deleteItem } from 'services/request'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('1')

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres')
      return false
    }
    if (quantity < 1) {
      alert('Quantidade nao pode ser menor que 1')
      return false
    }
    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteitem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item deletado com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <Title width={24} textAlign={'left'}>
            {item ? 'Editar item' : 'Adicionar novo item'}
          </Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalInputContainer>
          <Input
            onChange={(text) => setName(text)}
            value={name}
            label="Nome"
            placeholder="Arroz"
          />
          <Input
            onChange={(text) => setQuantity(text)}
            value={quantity}
            label="Quantidade"
            type="number"
          />
          <ButonsContainer>
            <ButtonsContent>
              <Button onClick={item ? callUpdateItem : callAddItem}>
                {item ? 'Atualizar' : 'Adicionar'}
              </Button>
            </ButtonsContent>
            <ButtonsContent>
              {item && (
                <Button
                  icon={'trash'}
                  variant="outline"
                  onClick={callDeleteitem}
                >
                  Deletar
                </Button>
              )}
            </ButtonsContent>
          </ButonsContainer>
        </ModalInputContainer>
      </ModalContent>
    </ModalContainer>
  )
}
