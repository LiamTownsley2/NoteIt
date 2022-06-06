import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    height: 50px;
    padding: 10px;
    background-color: #212121;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const NavText = styled.p`
    display: inline;
    color: white;
    padding: 0px;
    font-size: 20px;
`;

const HomeLink = styled.p`
    color: white;
    font-size: 25px;
    text-decoration: none;
`;

const AltText = styled.span`
    color: #e74c3c;
`;

export const NavigationBar = ({ page_author }) => {
    return (
        <NavBar>
            <Link className="a-no-deco" to="/"><HomeLink>Note<AltText>It</AltText></HomeLink></Link>

            {(typeof page_author == 'string') ? <NavText>{page_author}'s News Letter</NavText> : <></>}

            <Link className="a-sign-in-btn" to="/sign-in">Sign In</Link>
        </NavBar>
    )
}

export default NavigationBar;