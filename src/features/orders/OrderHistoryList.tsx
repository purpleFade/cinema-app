import styled from 'styled-components';
import type { Order } from '../../types';
import OrderItem from './OrderItem';

const List = styled.ul`
  list-style: none;
  padding: 30px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;

const EmptyMessage = styled.p`
  font-size: 1.25rem;
  color: #777;
  text-align: center;
`;

interface Props {
  orders: Order[];
}

export default function OrderHistoryList({ orders }: Props) {
  if (!orders.length) return <EmptyMessage>No past orders.</EmptyMessage>;

  return (
    <List>
      {orders.map((o) => (
        <OrderItem key={o.id} order={o} />
      ))}
    </List>
  );
}
