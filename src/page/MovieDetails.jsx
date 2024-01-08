import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/themoviedbAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const BackLocationHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchMoveisDetails = async () => {
      try {
        const moviesInfo = await getMovieDetails(movieId);
        setMovieDetails(moviesInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoveisDetails();
  }, [movieId, setMovieDetails]);

  return (
    <>
      <NavLink to={BackLocationHref.current} className="back-link">
        ←Go Back
      </NavLink>
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
    </>
  );
};

export default MovieDetails;
// {
//   "adult": false,
//   "backdrop_path": "/urwWVsciRiNSmhtMJcck0noWAXr.jpg",
//   "belongs_to_collection": null,
//   "budget": 0,
//   "genres": [
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     }
//   ],
//   "homepage": "",
//   "id": 504949,
//   "imdb_id": "tt7984766",
//   "original_language": "en",
//   "original_title": "The King",
//   "overview": "England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.",
//   "popularity": 22.85,
//   "poster_path": "/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg",
//   "production_companies": [
//     {
//       "id": 81,
//       "logo_path": "/8wOfUhA7vwU2gbPjQy7Vv3EiF0o.png",
//       "name": "Plan B Entertainment",
//       "origin_country": "US"
//     },
//     {
//       "id": 6237,
//       "logo_path": "/xfpb8Q8tVU0ZeQ6AUmi27jBRxra.png",
//       "name": "Porchlight Films",
//       "origin_country": "AU"
//     },
//     {
//       "id": 32299,
//       "logo_path": "/yNphx07jCXygH1Zh73tSPHnNi82.png",
//       "name": "Blue-Tongue Films",
//       "origin_country": "AU"
//     },
//     {
//       "id": 124854,
//       "logo_path": null,
//       "name": "Yoki",
//       "origin_country": ""
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "AU",
//       "name": "Australia"
//     },
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "2019-10-11",
//   "revenue": 0,
//   "runtime": 140,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     },
//     {
//       "english_name": "French",
//       "iso_639_1": "fr",
//       "name": "Français"
//     },
//     {
//       "english_name": "Latin",
//       "iso_639_1": "la",
//       "name": "Latin"
//     }
//   ],
//   "status": "Released",
//   "tagline": "All hail",
//   "title": "The King",
//   "video": false,
//   "vote_average": 7.152,
//   "vote_count": 2984
// }
