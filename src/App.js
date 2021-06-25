import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Loading from './components/graphics/loading-graphics';
import { theme } from './theme';
import Nav from './components/nav';
import './index.css';

const LoadableHomePage = lazy(() =>
    import( './pages/home')
);

const LoadableVendorPage = lazy(() =>
    import( './pages/vendors')
);

const LoadableTestPage = lazy(() =>
    import( './pages/test')
);

const LoadableSignUpPage = lazy(() =>
    import( './pages/signup')
);

const LoadableLoginPage = lazy(() =>
    import( './pages/signin')
);

const LoadableContactPage = lazy(() =>
    import( './pages/contact')
);

const LoadableReviewPage = lazy(() =>
    import( './pages/review')
);

const Container = styled('div')`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily.body};
    color: ${theme.colorMap.darkGrey2};
    background:  ${theme.colorMap.mustardYellow};
    overflow-x: hidden;
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <Container>
        <Nav/>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route
                            path="/test"
                            component={LoadableTestPage}
                        />
                        <Route
                            path="/signin"
                            component={LoadableLoginPage}
                        />
                        <Route
                            path="/signup"
                            component={LoadableSignUpPage}
                        />
                        <Route
                            path="/contact"
                            component={LoadableContactPage}
                        />
                        <Route
                            path="/review"
                            component={LoadableReviewPage}
                        />
                        <Route
                            path="/vendors"
                            component={LoadableVendorPage}
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
