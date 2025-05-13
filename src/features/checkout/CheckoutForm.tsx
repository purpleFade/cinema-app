import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSeatsStore } from '../../store/seatsStore';
import { useOrdersStore } from '../../store/ordersStore';
import { useNavigate } from 'react-router-dom';
import { movies } from '../../data/movies';
import SeatSelector from '../seats/SeatSelector';

interface FormData {
  name: string;
  email: string;
  showTime: string;
  movieId: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  transition: all 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  transition: all 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Btn = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #555;
`;

const SeatSelectorContainer = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export default function CheckoutForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const seats = useSeatsStore((s) => s.selectedSeats);
  const addOrder = useOrdersStore((s) => s.addOrder);
  const clearSeats = useSeatsStore((s) => s.clearSeats);
  const navigate = useNavigate();

  const onSubmit = ({ movieId }: FormData) => {
    const movie = movies.find((m) => m.id === movieId)!;
    addOrder({
      id: Date.now().toString(),
      movieId,
      movieTitle: movie.title,
      seats,
      date: new Date().toISOString(),
    });
    clearSeats();
    navigate('/orders');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Select {...register('movieId')}>
        {movies.map((m) => (
          <option key={m.id} value={m.id}>
            {m.title}
          </option>
        ))}
      </Select>
      <Select {...register('showTime')}>
        {movies
          .find((m) => m.id === movies[0].id)
          ?.showTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
      </Select>
      <Input {...register('name')} placeholder='Your Name' />
      <Input {...register('email')} type='email' placeholder='Email' />

      {/* Seat Selection */}
      <SeatSelectorContainer>
        <Label>Choose Your Seats</Label>
        <SeatSelector
          seats={Array.from({ length: 50 }, (_, i) => (i + 1).toString())}
        />
      </SeatSelectorContainer>

      <Btn type='submit'>Book Seats ({seats.length})</Btn>
    </Form>
  );
}
