import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setGender } from '../../../redux/slice';
import type { AppDispatch } from '../../../redux/store';
import type { Gender } from '../../../types';

const { btnStyle, boxStyle, btnActive, btnCtr, header } = {
  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnCtr: {
    display: 'flex',
    justifyContent: 'center'
  },
  btnStyle: {
    margin: '10px'
  },
  btnActive: {
    backgroundColor: 'red'
  },
  header: {
    textAlign: 'center'
  }
};

interface Props {
  data: Gender[] | undefined;
}

interface Dispatch {
  payload: { user: string; target: string };
  type: 'app/setGender';
}

const GenderSelect: React.FC<Props> = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<string>('');
  const [target, setTarget] = useState<string>('');

  const handleSubmit = (): Dispatch => dispatch(setGender({ user, target }));

  return (
    <Box sx={boxStyle}>
      <Typography sx={header} variant="h1">
        Pokemon Tinder
      </Typography>
      <Typography variant="h6">I am a:</Typography>
      <Container sx={btnCtr}>
        {data?.map((item) => (
          <Button onClick={() => setUser(item.name)} sx={{ ...btnStyle, ...(user === item.name && btnActive) }} key={item.url} variant="contained">
            {item.name}
          </Button>
        ))}
      </Container>
      <Typography variant="h6">Interested in:</Typography>
      <Container sx={btnCtr}>
        {data?.map((item) => (
          <Button onClick={() => setTarget(item.name)} sx={{ ...btnStyle, ...(target === item.name && btnActive) }} key={item.url} variant="contained">
            {item.name}
          </Button>
        ))}
      </Container>
      <NavLink to="/home">
        <Button sx={btnStyle} color="secondary" variant="contained" onClick={handleSubmit}>
          Lets Go!
        </Button>
      </NavLink>
    </Box>
  );
};

export default GenderSelect;
