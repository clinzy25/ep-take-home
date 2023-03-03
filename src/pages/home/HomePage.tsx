import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import View from '../../components/View';
import { useGetPokemonByGenderQuery } from '../../redux/pokemonService';
import { AppState } from '../../redux/slice';
import Match from './components/Match';

const HomePage = () => {
  const { gender } = useSelector((state: AppState) => state.app);
  const { data, isFetching } = useGetPokemonByGenderQuery({ gender: gender.target, offset: 0 });

  return (
    <View>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <div>
          {data?.map((item) => (
            <Match pokemonName={item} />
          ))}
        </div>
      )}
    </View>
  );
};

export default HomePage;
