import { Carousel } from '../components';
import styled from 'styled-components';

const PageParent = styled.div`
  padding: 20px;
  text-align: center;
`;

const CTA = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const HeaderText = styled.h1`
    color: #e74c3c;
    text-align: center;
`;

const SubtitleText = styled.h2`
    color: gray;
    text-align: center;
    margin: 0px 300px;
`;

const CallToAction = styled.button`
  background: none;
  border: 3px solid #e74c3c;
  color: white;
  margin: 20px 0px;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 15px;
  transition: background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #c0392b;
  }
`;



const Home = () => {
  return (
    <PageParent>
      <Carousel />

      <CTA>
        <HeaderText>Join Us!</HeaderText>
        <SubtitleText>We are always accepting new creators on our site! If you would like to get your own personal News Letter that you can customise and send out to friends, you can do so by clicking on the button below.</SubtitleText>
        <CallToAction>Sign Up Now!</CallToAction>
      </CTA>
    </PageParent>
  );
}

export default Home;
