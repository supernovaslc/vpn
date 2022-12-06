import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import DownloadView from './pages/DownloadView';
import { Route, Routes, Outlet } from 'react-router-dom';
import PreviewVPN from './pages/PreviewVPN';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<DownloadView />} />
          <Route path="/preview/:id" element={<PreviewVPN />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
