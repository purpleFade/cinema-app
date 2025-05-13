import styled from 'styled-components';
import { useSeatsStore } from '../../store/seatsStore';

const Summary = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 1.25rem;
`;

export default function PaymentSummary() {
  const seats = useSeatsStore((s) => s.selectedSeats);
  const pricePerSeat = 5;

  return (
    <Summary>
      <Title>Payment Summary</Title>
      <p>Seats: {seats.join(', ')}</p>
      <p>Total: ${seats.length * pricePerSeat}</p>
    </Summary>
  );
}
