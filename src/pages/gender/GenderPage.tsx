import { CircularProgress } from '@mui/material';
import View from '../../components/View';
import { useGetAllGendersQuery } from '../../redux/pokemonService';
import GenderSelect from './components/GenderSelect';

const GenderPage: React.FC = () => {
  const { data, isFetching } = useGetAllGendersQuery();

  return <View>{isFetching ? <CircularProgress /> : <GenderSelect data={data} />}</View>;
};

export default GenderPage;
