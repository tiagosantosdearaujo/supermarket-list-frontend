import './index.css'
import { ListCard } from 'components/ListCard'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.lenght === 0) {
    return <h3>Sua lista esta vazia.</h3>
  }
  return (
    <div className="list-screen-list-content-container">
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          key={item._id}
          item={item}
        />
      ))}
    </div>
  )
}
