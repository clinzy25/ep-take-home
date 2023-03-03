import { Box, Button, Container, Typography } from '@mui/material';
import { Gender } from '../../../types';

interface Props {
  data: Gender[] | undefined;
}

const boxStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const btnStyle = { margin: '10px' };

const GenderBtns = ({ data }: Props) => {
  return data?.map((item) => (
    <Button sx={btnStyle} key={item.url} variant="contained">
      {item.name}
    </Button>
  ));
};

const GenderSelect = ({ data }: Props) => {
  return (
    <Box sx={boxStyle}>
      <Typography variant="h6">I am a</Typography>
      <Container>
        <GenderBtns data={data} />
      </Container>
      <Typography variant="h6">Interested in</Typography>
      <Container>
        <GenderBtns data={data} />
      </Container>
    </Box>
  );
};

export default GenderSelect;
