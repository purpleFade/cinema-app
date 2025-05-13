import styled from 'styled-components';
import type { Order } from '../../types';

const Container = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  color: #333;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #666;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #444;
`;

export default function OrderItem({ order }: { order: Order }) {
  return (
    <Container>
      <Title>Order #{order.id}</Title>
      <InfoText>
        <InfoLabel>Movie:</InfoLabel> {order.movieTitle}
      </InfoText>
      <InfoText>
        <InfoLabel>Seats:</InfoLabel> {order.seats.join(', ')}
      </InfoText>
      <InfoText>
        <InfoLabel>Date:</InfoLabel> {new Date(order.date).toLocaleString()}
      </InfoText>
    </Container>
  );
}
