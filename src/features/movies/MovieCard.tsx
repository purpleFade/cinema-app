import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Movie } from '../../data/movies';

const Card = styled(Link)`
  display: block;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
const Poster = styled.img`
  width: 100%;
  height: auto;
`;
const Info = styled.div`
  padding: 8px;
`;
const Title = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
`;

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card to={`/movie/${movie.id}`}>
      <Poster src={movie.posterUrl} alt={movie.title} />
      <Info>
        <Title>{movie.title}</Title>
      </Info>
    </Card>
  );
}
