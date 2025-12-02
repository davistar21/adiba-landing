import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Header } from '../Header/Header';

export function Layout() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
}
