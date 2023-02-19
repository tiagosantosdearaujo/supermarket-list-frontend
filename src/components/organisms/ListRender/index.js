import { ListCard } from 'components/molecules'
import { Subtitle } from 'components/atoms'
import { ListScreenListContentContainer } from './styles.js'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.lenght === 0) {
    return <Subtitle>Sua lista esta vazia.</Subtitle>
  }
  return (
    <ListScreenListContentContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          key={item._id}
          item={item}
        />
      ))}
    </ListScreenListContentContainer>
  )
}
