import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Loading from './components/graphics/loading-graphics';
import { theme } from './theme';

const LoadableHomePage = lazy(() =>
    import( './pages/home')
);

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        
                        <Route
                            path="/"
                            component={LoadableHomePage}
                        />
                    </Switch>
                </Suspense>
        </BrowserRouter>
    </ThemeProvider>
);
export default hot(App);
