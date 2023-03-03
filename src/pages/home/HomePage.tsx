import { Box, Button, CircularProgress, Container } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import View from '../../components/View';
import { useGetPokemonByGenderQuery } from '../../redux/pokemonService';
import { AppState } from '../../redux/slice';
import Match from './components/Match';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

const { ctr, iconHeart, iconX } = {
  ctr: {
    display: 'flex',
    width: 'min-content'
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
  const { gender, offset } = useSelector((state: AppState) => state.app);
  const { data, isFetching } = useGetPokemonByGenderQuery({ gender: gender.target, offset });
  const [index, setIndex] = useState(0);

  return (
    <View>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Container sx={ctr}>
          <Button onClick={() => setIndex(index - 1)}>
            <CloseIcon sx={iconX} />
          </Button>
          <Match pokemonName={data[index]} />
          <Button onClick={() => setIndex(index + 1)}>
            <FavoriteIcon sx={iconHeart} />
          </Button>
        </Container>
      )}
    </View>
  );
};

export default HomePage;
