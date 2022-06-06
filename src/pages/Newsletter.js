import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const PageParent = styled.div`
  padding: 0px;
  margin: 0px;
`;

const Newsletter = () => {
    const params = useParams();
    return (
        <PageParent>
            <h1>You are on newsletter with the ID {params.id}</h1>
        </PageParent>
    )
}

export default Newsletter;