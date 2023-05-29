import { CardCover, CardItem, CardListGrid, CardText } from './CardList.styled.component';
import { useNavigate } from 'react-router-dom';

import { cardList } from './car-list';
import { useAuthStore } from '@/features/auth';

const CardList = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore().auth!;

  return (
    <CardListGrid>
      {cardList[user.role].slice(2).map(card => (
        <CardItem onClick={() => navigate(card.path)}>
          <CardCover src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
          <CardText>{card.text}</CardText>
        </CardItem>
      ))}
    </CardListGrid>
  )
}

export default CardList;
