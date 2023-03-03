import View from '../../components/View';
import { useGetAllGendersQuery } from '../../redux/pokemonService';
import GenderSelect from './components/GenderSelect';

const GenderPage = () => {
  const { data, isFetching } = useGetAllGendersQuery();

  return <View>{isFetching ? 'loading' : <GenderSelect data={data} />}</View>;
};

export default GenderPage;
