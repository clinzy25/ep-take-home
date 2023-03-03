import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setGender } from '../../../redux/slice';
import { Gender } from '../../../types';

const { btnStyle, boxStyle, btnActive } = {
  boxStyle: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  btnStyle: { margin: '10px' },
  btnActive: { backgroundColor: 'red' }
};

interface Props {
  data: Gender[] | undefined;
}

const GenderSelect = ({ data }: Props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [target, setTarget] = useState('');

  const handleSubmit = () => dispatch(setGender({ user, target }));

  return (
    <>
      <Typography variant="h1">Pokemon Tinder</Typography>
      <Box sx={boxStyle}>
        <Typography variant="h6">I am a:</Typography>
        <Container>
          {data?.map((item) => (
            <Button onClick={() => setUser(item.name)} sx={{ ...btnStyle, ...(user === item.name && btnActive) }} key={item.url} variant="contained">
              {item.name}
            </Button>
          ))}
        </Container>
        <Typography variant="h6">Interested in:</Typography>
        <Container>
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
    </>
  );
};

export default GenderSelect;
