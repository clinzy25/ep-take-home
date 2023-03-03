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
        flex: 1
      }}>
      {children}
    </Box>
  );
};
export default View;
