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

const NavButton = styled.button`
    border: 1px solid #e74c3c;
    border-radius: 10px;
    padding: 10px 30px;
    background: none;
    color: white;
    transition: background-color 0.3s ease-in;

    &:hover {
        cursor: pointer;
        background-color: #c0392b;
    }
`;


const HomeLink = styled.a`
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
            <HomeLink href="https://google.com">Note<AltText>It</AltText></HomeLink>

            {(typeof page_author == 'string') ? <NavText>{page_author}'s News Letter</NavText> : <></>}

            <NavButton id="nav-sign-in">Sign In</NavButton>
        </NavBar>
    )
}

export default NavigationBar;