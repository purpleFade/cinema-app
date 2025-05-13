import styled from 'styled-components';
import { movies } from '../../data/movies';
import MovieCard from './MovieCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

export default function MovieList() {
  return (
    <Grid>
      {movies.map((m) => (<MovieCard key={m.id} movie={m} />))}
    </Grid>
  );
}
