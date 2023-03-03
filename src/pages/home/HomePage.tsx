import { Button, CircularProgress, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from '../../components/View';
import { pokemonApi, useGetPokemonByGenderQuery } from '../../redux/pokemonService';
import { AppState, setLikes } from '../../redux/slice';
import Match from './components/Match';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

const { matchCtr, iconHeart, iconX, outerCtr, btnCtr, btn } = {
  outerCtr: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content'
  },
  matchCtr: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content'
  },
  btnCtr: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  btn: {
    flex: 1,
    margin: '5px'
  },
  iconHeart: {
    color: 'green',
    fontSize: 40
  },
  iconX: {
    color: 'red',
    fontSize: 40
  }
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { gender, offset } = useSelector((state: AppState) => state.app);
  const { data, isFetching } = useGetPokemonByGenderQuery({ gender: gender.target, offset });
  const [index, setIndex] = useState(0);

  const pokemon = pokemonApi.endpoints.getPokemonByName.useQueryState(data?.[index]).data;

  const removeFromCache = () =>
    dispatch(
      pokemonApi.util.updateQueryData('getPokemonByGender', { gender: gender.target, offset }, (pokemon) => {
        pokemon.splice(index, 1);
      })
    );

  const handleLike = () => {
    dispatch(setLikes({ pokemon, liked: 1 }));
    removeFromCache();
    setIndex(index === data?.length - 1 ? 0 : index + 1);
  };

  const handleDislike = () => {
    dispatch(setLikes({ pokemon, liked: 0 }));
    removeFromCache();
    setIndex(index === 0 ? data?.length - 2 : index - 1);
  };

  return (
    <View>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Container sx={outerCtr}>
          <Container sx={btnCtr}>
            <Button color="secondary" variant="contained">
              My Likes
            </Button>
            <Button color="secondary" variant="contained">
              My Dislikes
            </Button>
          </Container>
          <Container sx={matchCtr}>
            <Match pokemonName={data[index]} />
            <Container sx={btnCtr}>
              <Button variant="outlined" sx={btn} onClick={handleDislike}>
                <CloseIcon sx={iconX} />
              </Button>
              <Button variant="outlined" sx={btn} onClick={handleLike}>
                <FavoriteIcon sx={iconHeart} />
              </Button>
            </Container>
          </Container>
        </Container>
      )}
    </View>
  );
};

export default HomePage;
