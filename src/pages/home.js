import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';

const Container = styled('div')`
    margin: ${theme.size.xlarge} auto;
    text-align: center;
`;
const Home= () => (
    <Container>
        Hello, World!
    </Container>
);

export default Home;
