import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { movies } from '../../data/movies';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const PosterEl = styled.img`
  width: 400px;
  border-radius: 8px;
`;
const TitleEl = styled.h1`
  font-size: 1.75rem;
  margin: 16px 0;
`;
const Text = styled.p`
  margin: 8px 0;
`;
const Showtimes = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 16px 0;
`;
const Showtime = styled.span`
  padding: 4px 8px;
  background: #eee;
  border-radius: 4px;
`;

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === id);
  if (!movie) return <p>Movie not found.</p>;

  return (
    <Container>
      <TitleEl>{movie.title}</TitleEl>
      <PosterEl src={movie.posterUrl} alt={movie.title} />
      <Text>{movie.overview}</Text>
      <Text>Runtime: {movie.runtime} min</Text>
      <Text>Showtimes:</Text>
      <Showtimes>
        {movie.showTimes.map((t) => (
          <Showtime key={t}>{t}</Showtime>
        ))}
      </Showtimes>
    </Container>
  );
}
