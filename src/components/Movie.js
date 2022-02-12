import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Somenthing went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
    </>
  )
};

export default Movie;