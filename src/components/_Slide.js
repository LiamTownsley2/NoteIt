import styled from 'styled-components';

const Slide = styled.div`
    width: 500px;
    height: 200px;
    overflow: hidden;
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    pointer-events: auto;
    border-radius: 15px;

    &:hover {
        cursor: pointer;
    }

    background-image: url(${props => props.splash_image});
`;

const SlideTextBar = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
`;

const _Slide = ({ image }) => {
    return (
        <Slide splash_image={image}>
            <SlideTextBar>Liam's News Letter</SlideTextBar>
        </Slide>
    )
}

export default _Slide;