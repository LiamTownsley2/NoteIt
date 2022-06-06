import styled from 'styled-components';

import { NavigationBar } from '../components';

const PageParent = styled.div`
  padding: 0px;
  margin: 0px;
`;

const Blog = () => {
    return (
        <PageParent>
            <NavigationBar />
            <h1>Test!!!!</h1>
        </PageParent>
    )
}

export default Blog;