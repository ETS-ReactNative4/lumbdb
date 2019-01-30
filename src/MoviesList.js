/* eslint-disable-line/no-did-mount-set-state: 0 */
import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';


class MoviesList extends React.Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e77250d3d71b4bc9df65bc10863d0077&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>

    );
  }
}


export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem;
`;
