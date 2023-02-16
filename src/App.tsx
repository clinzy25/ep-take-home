import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import View from './View';

function App() {
  return (
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
      <View />
    </Box>
  );
}

export default App;
