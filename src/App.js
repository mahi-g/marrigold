import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Loading from './components/graphics/loading-graphics';
import { theme } from './theme';
import Nav from './components/Nav.js';
import './index.css';

const LoadableHomePage = lazy(() =>
    import( './pages/home')
);

const LoadableTestPage = lazy(() =>
    import( './pages/test')
);

const Container = styled('div')`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${theme.colorMap.darkGrey2};
    font-family: ${theme.fontFamily.body};
    background:  ${theme.colorMap.mustardYellow};
    overflow-x: hidden;
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <Container>
        <Nav />
            <BrowserRouter>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route
                                path="/test"
                                component={LoadableTestPage}
                            />  
                            <Route
                                path="/"
                                component={LoadableHomePage}
                            />
                        </Switch>
                    </Suspense>
            </BrowserRouter>
        </Container>
    </ThemeProvider>
);
export default hot(App);
