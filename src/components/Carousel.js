import { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const CarouselParent = styled.div`
    text-align: center;
`;

const HeaderText = styled.h1`
    color: #e74c3c;
`;

const SubtitleText = styled.h2`
    color: gray;
`;

const ViewMore = styled.button`
  background: none;
  border: 3px solid #252525;
  color: white;
  margin: 20px 0px;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 15px;
  transition: background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #232323;
  }
`;

const Carousel = ({ scroll_speed = 35 }) => {
    const [speed, setSpeed] = useState(scroll_speed);
    return <CarouselParent>
        <HeaderText>View Newsletters from our Community!</HeaderText>
        <SubtitleText>You can view the news letters for members of our community.</SubtitleText>
        <Slider speed={speed} />
        <ViewMore>View More</ViewMore>
    </CarouselParent>;

}

export default Carousel;