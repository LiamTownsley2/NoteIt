import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { default as Slide } from './_Slide.js';


const ScrollAnim = keyframes`
0% {
   transform: translateX(0px);
}

100% {
   transform: translateX(calc(-200px * 10));
}
`;

const SlideParent = styled.div`
position: relative;
width: 100%;
display: grid;
place-items: center;
overflow: hidden;
margin-top: 30px;
`;

const SlideTrack = styled.div`
width: calc(200px * 20);
display: flex;
animation: ${ScrollAnim} 35s linear infinite;
justify-content: space-between;
pointer-events: none;

&:hover {
    animation-play-state: paused;
}

> div:hover {
    color: #e74c3c;
}
`;

const Slider = () => {
    return (
        <SlideParent>
            <SlideTrack id="slide-track">
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />
                <Slide image="https://avatars.githubusercontent.com/u/88986614?v=4" />

            </SlideTrack>
        </SlideParent>
    );
};

export default Slider;