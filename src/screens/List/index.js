import { useEffect, useState } from 'react'
import { getList, checkItem } from 'services/request'
import { Button, ListRender, Loader, Modal, Title } from 'components'
import {
  ListScreenContainer,
  ListScreenContentContainer,
  ListScreenHeader,
  ListScreenHeaderTextContainer,
  ListScreenHeaderButton,
  ListScreenHeaderLogoImage,
  ListScreenListContainer
} from './styles.js'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setloading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    setloading(true)
    const result = await getList()
    setListData(result)
    setloading(false)
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await checkItem(item._id, {
      ...item,
      checked: !item.checked
    })
    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <ListScreenContainer>
      <ListScreenContentContainer>
        <ListScreenHeader>
          <ListScreenHeaderTextContainer>
            <ListScreenHeaderLogoImage />
            <Title Widht={85} marginLeft={2.4} fontSize={36}>
              Lista de Supermercado
            </Title>
          </ListScreenHeaderTextContainer>
          <ListScreenHeaderButton>
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </ListScreenHeaderButton>
        </ListScreenHeader>
        <ListScreenListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListScreenListContainer>
      </ListScreenContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ListScreenContainer>
  )
}
