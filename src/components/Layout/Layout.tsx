import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <Box bg="white">
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
