import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { buildQueryString, parseQueryString } from '../../utils/query-string';
import Button from '../../components/button';
import { theme } from '../../theme';

const ElementGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1/2rem;
    @media ${theme.screenSize.upToMedium} {
        display: block;
    }
`;

const HasMoreButtonContainer = styled('div')`
    margin-bottom: ${theme.size.large};
    margin-top: ${theme.size.large};
    text-align: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: ${theme.size.large}; 
`;

const CardContainer = styled.div`
  margin-bottom: ${theme.size.xlarge};
`;

const Paginate = ({
    children,
    limit,
    Grid = ElementGrid,
    gridProps = {},
    ...props
}) => {
    const pathname = window.location.pathname;
    const search  = window.location.search;
    const localPage = pathname;
    // Build next link, preserving other links
    const nextPageLink = useMemo(() => {
        // Get page if exists from search
        const { page = 1, ...params } = parseQueryString(search);
        // Have to parseInt because string + number gives a string
        const pageNumber = parseInt(page) + 1;
        return localPage + buildQueryString({ page: pageNumber, ...params });
    }, [localPage, search]);

    useEffect(() => {
        const { page = 1 } = parseQueryString(search);
        setVisibleLength(page * limit);
    }, [limit, search]);

    const { page = 1 } = parseQueryString(search);
    const [visibleLength, setVisibleLength] = useState(page * limit);

    const hasMore = children.length > visibleLength;
    const visibleElements = useMemo(() => children.slice(0, visibleLength), [
        children,
        visibleLength,
    ]);

    const handleClick =() => {
        //will change this with a fetch call once the backend is set up
        window.location.href=nextPageLink;
    };

    return (
        <div {...props}>
            <CardContainer>
                <Grid children={visibleElements} {...gridProps} />
            </CardContainer>
            {hasMore && (
                <HasMoreButtonContainer>
                    <StyledButton 
                        onClick={handleClick}
                        width={'120px'}
                        height={'40px'}
                    >
                        Load more
                    </StyledButton>
                </HasMoreButtonContainer>
            )}
        </div>
    );
};

export default Paginate;
