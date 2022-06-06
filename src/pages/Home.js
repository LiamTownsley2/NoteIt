import { Carousel } from '../components';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQ5ML8SqOT5ng4anDIuWK5nnHnFluY5Y",
  authDomain: "note-it-9c761.firebaseapp.com",
  projectId: "note-it-9c761",
  storageBucket: "note-it-9c761.appspot.com",
  messagingSenderId: "102619486473",
  appId: "1:102619486473:web:a52f63b0ac95f148d9dbd8",
  measurementId: "G-NBVC7RS9VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);


const PageParent = styled.div`
  padding: 20px;
  text-align: center;
`;

const CTA = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Home = () => {
  return (
    <PageParent>
      <Carousel />

      <CTA>
        <HeaderText>Join Us!</HeaderText>
        <SubtitleText>We are always accepting new creators on our site! If you would like to get your own personal News Letter that you can customise and send out to friends, you can do so by clicking on the button below.</SubtitleText>
        <Link className="a-cta-btn" to="/sign-up">Sign Up Now!</Link>
      </CTA>
    </PageParent>
  );
}

export default Home;
