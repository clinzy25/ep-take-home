import { Button, CircularProgress, Container, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from '../../components/View';
import { pokemonApi, useGetPokemonByGenderQuery } from '../../redux/pokemonService';
import { setLikes } from '../../redux/slice';
import Match from './components/Match';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import type { AppState } from '../../redux/slice';
import type { AppDispatch } from '../../redux/store';
import type { PatchCollection } from '@reduxjs/toolkit/dist/query/core/buildThunks';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { gender, offset } = useSelector((state: AppState) => state.app);
  const { data, isFetching } = useGetPokemonByGenderQuery({ gender: gender.target, offset });
  const [index, setIndex] = useState<number>(0);
  const theme = useTheme();

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
      margin: '5px',
      backgroundColor: theme.palette.secondary.main
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

  const pokemon = pokemonApi.endpoints.getPokemonByName.useQueryState(data?.[index] ?? 'bulbasaur').data;

  const removeFromCache = (): PatchCollection =>
    dispatch(
      pokemonApi.util.updateQueryData('getPokemonByGender', { gender: gender.target, offset }, (pokemon) => {
        pokemon.splice(index, 1);
      })
    );

  const handleLike = (): void => {
    if (typeof pokemon === 'undefined') {
      throw new Error('pokemon is undefined');
    }
    dispatch(setLikes({ pokemon, liked: 1 }));
    removeFromCache();
    setIndex(index === data!.length - 1 ? 0 : index + 1);
  };

  const handleDislike = (): void => {
    if (typeof pokemon === 'undefined') {
      throw new Error('pokemon is undefined');
    }
    dispatch(setLikes({ pokemon, liked: 0 }));
    removeFromCache();
    setIndex(index === 0 ? data!.length - 2 : index - 1);
  };

  return (
    <View>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Container sx={outerCtr}>
          <Container sx={btnCtr}>
            <NavLink to="/likes">
              <Button color="secondary" variant="contained">
                My Likes
              </Button>
            </NavLink>
            <NavLink to="/matches">
              <Button color="secondary" variant="contained">
                My Matches
              </Button>
            </NavLink>
            <NavLink to="/dislikes">
              <Button color="secondary" variant="contained">
                My Dislikes
              </Button>
            </NavLink>
          </Container>
          <Container sx={matchCtr}>
            <Match pokemonName={data![index]} />
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
