import styled, { css } from 'styled-components';
import { useSeatsStore } from '../../store/seatsStore';

const Btn = styled.button<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${({ selected }) => (selected ? '#007bff' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  cursor: pointer;
  ${({ selected }) =>
    !selected &&
    css`
      &:hover {
        background: #eee;
      }
    `}
`;
export default function Seat({
  id,
  selected,
}: {
  id: string;
  selected: boolean;
}) {
  const toggle = useSeatsStore((s) => s.toggleSeat);
  return (
    <Btn selected={selected} onClick={(e) => {
      e.preventDefault();
      toggle(id)
    }}>
      {id}
    </Btn>
  );
}
