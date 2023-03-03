import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export interface ViewProps {
  children: ReactNode;
}
const View = ({ children }: ViewProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        // consume available vertical space:
        flex: 1,
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {children}
    </Box>
  );
};
export default View;
