import { ListCard } from 'components/molecules'
import { Subtitle } from 'components/atoms'
import { ListScreenListContentContainer } from './styles.js'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <Subtitle>
        Sua lista vazia, clique no botão "Adicionar" para incluir novos items.
      </Subtitle>
    )
  }

  return (
    <ListScreenListContentContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListScreenListContentContainer>
  )
}
