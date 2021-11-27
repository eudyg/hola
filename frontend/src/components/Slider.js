import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

export const Top = styled.div`

padding-top: 105px;


@media (max-width: 567px) {
  
padding-top: 96px;
}

`

const Slider = ({start}) => {
    return (
      <Top>
        <Carousel fade>
       {start.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
      </Top>
    )
}

export default Slider
