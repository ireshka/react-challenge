import { Box, Container } from '@mui/material';
import { AppBar } from 'ui';

export const Layout = ({ routing, children }) => (
  <>
    <AppBar routing={routing} />
    <Container maxWidth={'xl'}>
      <Box mt={6}>{children}</Box>
    </Container>
  </>
);
