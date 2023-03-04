import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import type { AppState } from '../../redux/slice';
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

const LikesPage: React.FC<Props> = ({ type }: Props) => {
  const { likes, dislikes, matches } = useSelector((state: AppState) => state.app);

  const getType = (): IPokemon[] => {
    switch (type) {
      case 'likes':
        return likes;
      case 'dislikes':
        return dislikes;
      case 'matches':
        return matches;
      default:
        return likes;
    }
  };

  return (
    <Box sx={ctr}>
      <Typography variant="h2">{type}</Typography>
      <ImageList cols={4} rowHeight={250}>
        {getType().map((item) => (
          <ImageListItem sx={img} key={item.name}>
            <img src={item.sprites.other['official-artwork'].front_default} alt={item.name} loading="lazy" />
            <ImageListItemBar sx={imgName} position="below" title={item.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default LikesPage;
