import { Container, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/slice';
import type { IPokemon } from 'pokeapi-typescript';

const { ctr, img, imgName } = {
  ctr: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },
  img: {
    width: '200px',
    height: '200px'
  },
  imgName: {
    textAlign: 'center'
  }
};

interface Props {
  type: string;
}

const Image = ({ item }: IPokemon) => (
  <ImageListItem sx={img} key={item.name}>
    <img src={item.sprites.other['official-artwork'].front_default} alt={item.name} loading="lazy" />
    <ImageListItemBar sx={imgName} position="below" title={item.name} />
  </ImageListItem>
);

const LikesPage = ({ type }: Props) => {
  const { likes, dislikes } = useSelector((state: AppState) => state.app);

  return (
    <Box sx={ctr}>
      <Typography variant="h2">{type}</Typography>
      <ImageList cols={4} rowHeight={250}>
        {type === 'likes' ? likes.map((item) => <Image item={item} />) : dislikes.map((item) => <Image item={item} />)}
      </ImageList>
    </Box>
  );
};

// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}

export default LikesPage;
