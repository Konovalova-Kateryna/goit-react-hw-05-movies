import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import { CastList, CastTitle, CastItem, CastCharacter } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const responce = await getMovieCast(movieId);
        setCast([...responce.cast]);
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast.slice(0, 12).map(item => (
          <CastItem key={item.cast_id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                  : '/img/no-image.jpg'
              }
              alt={item.original_name}
            />
            {/* {item.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                alt={item.original_name}
              />
            ) : (
              <img
                src="no-image"
                alt={item.original_name}
                width="300px"
                height="450px"
              />
            )} */}

            <CastTitle>{item.original_name}</CastTitle>
            <CastCharacter>{item.character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};
export default Cast;
