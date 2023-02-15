import './index.css'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <div className="list-card-text-content">
        <img
          className="checkbox"
          alt="checkbox-icon"
          src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
          onClick={() => onCheckItem(item)}
        />
        <div className="list-card-text-container">
          <span className="list-card-text-container-title">{item?.name}</span>
          <span className="list-card-text-container-subtitle">
            {item?.quantity} unidades
          </span>
        </div>
      </div>
      <div className="arrow-icon-container" onClick={() => onClick(item)}>
        <img src="images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
      </div>
    </div>
  )
}
