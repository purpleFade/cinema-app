import MovieList from '../features/movies/MovieList';
import styled from 'styled-components';

const Section = styled.section`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export default function Home() {
  return (
    <Section>
      <Title>Now Showing</Title>
      <MovieList />
    </Section>
  );
}
