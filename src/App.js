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

const Container = styled('div')`
    margin: 0;
    padding: 0;
    height: 100vh; 
    min-height: 100%;
    width: 100vw;
    text-align: center;
    color: ${theme.colorMap.darkGrey2};
    font-family: ${theme.fontFamily.body};
    background:  ${theme.colorMap.mustardYellow};
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <Container>
        <Nav />
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
        </Container>
    </ThemeProvider>
);
export default hot(App);
