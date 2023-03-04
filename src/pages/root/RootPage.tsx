import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import View from '../../components/View';
import Instructions from './components/Instructions';

const Root: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          UI-UX-Challenge
        </Typography>
      </Toolbar>
    </AppBar>
    <View>
      <Instructions />
    </View>
  </Box>
);

export default Root;
