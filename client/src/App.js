import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { themeSettings } from './theme';
import HomePage from './scenes/homePage';
import UserPage from './scenes/userPage';
import SearchPage from './scenes/searchPage';
import RestaurantPage from './scenes/restaurantPage';
import { UserProvider } from './UserContext';
import Login from './components/Login';
import { useState } from 'react';
import { RandomImageProvider } from './ImageContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // refetchInterval: 1000,
    },
  },
});

function App() {
  const theme = createTheme(themeSettings);
  const [isShowingAll, setIsShowingAll] = useState(true);

  return (
    <div className='App'>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <BrowserRouter>
            <RandomImageProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                  <Route
                    path='/'
                    element={<HomePage setIsShowingAll={setIsShowingAll} />}
                  />
                  <Route path='/login' element={<Login />} />
                  <Route
                    path='/search'
                    element={
                      <SearchPage
                        isShowingAll={isShowingAll}
                        setIsShowingAll={setIsShowingAll}
                      />
                    }
                  />
                  <Route path='/user/:userId' element={<UserPage />} />
                  <Route
                    path='/restaurant/:restaurantId'
                    element={<RestaurantPage />}
                  />
                </Routes>
              </ThemeProvider>
            </RandomImageProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </UserProvider>
    </div>
  );
}

export default App;
