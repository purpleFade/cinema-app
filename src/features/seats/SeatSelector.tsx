import styled from 'styled-components';
import { useSeatsStore } from '../../store/seatsStore';
import Seat from './Seat';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  overflow-x: scroll;
`;
export default function SeatSelector({ seats }: { seats: string[] }) {
  const selected = useSeatsStore((s) => s.selectedSeats);
  return (
    <Grid>
      {seats.map((id) => (
        <Seat key={id} id={id} selected={selected.includes(id)} />
      ))}
    </Grid>
  );
}
