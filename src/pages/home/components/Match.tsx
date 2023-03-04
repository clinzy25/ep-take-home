import { useGetPokemonByNameQuery } from '../../../redux/pokemonService';
import { CircularProgress, Container, Typography, Box } from '@mui/material';

const { imgCtr, marginTop, img } = {
  imgCtr: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '475px',
    height: '540px'
  },
  img: {
    transition: 'all 0.3s ease-out'
  },
  marginTop: {
    marginTop: 'auto'
  }
};
interface Props {
  pokemonName: string;
}

const Match: React.FC<Props> = ({ pokemonName }: Props) => {
  const { data, isFetching } = useGetPokemonByNameQuery(pokemonName);

  return (
    <Container sx={imgCtr}>
      {isFetching ? <CircularProgress sx={marginTop} /> : <Box sx={img} component="img" src={data?.sprites.other['official-artwork'].front_default} alt={pokemonName} />}
      <Typography sx={marginTop} variant="h3">
        {data?.name}
      </Typography>
    </Container>
  );
};

export default Match;
