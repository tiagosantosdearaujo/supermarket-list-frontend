import './index.css'
import {
  ListCardContainer,
  ListCardTextContainer,
  ListCardTextContent,
  Checkbox,
  ArrowIconContainer,
  ArrowIcon
} from './styles.js'
import { SmallText } from 'components'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <ListCardContainer>
      <ListCardTextContent>
        <Checkbox
          className="checkbox"
          alt="checkbox-icon"
          src={`/images/${item.checked ? 'checked.svg' : 'unchecked.svg'}`}
          onClick={() => onCheckItem(item)}
        />
        <ListCardTextContainer>
          <SmallText align={'left'}>{item.name}</SmallText>
          <SmallText fontSize={12} align={'left'}>
            {item.quantity} unidades
          </SmallText>
        </ListCardTextContainer>
      </ListCardTextContent>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </ListCardContainer>
  )
}
