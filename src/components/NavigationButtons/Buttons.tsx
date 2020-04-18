import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    
    width: 70px;
    height:40px;
`;

const StyledImg = styled.img`
    
    width: 20px;
    height: 20px;
    object-fit: contain;
    padding: 5px 25px 0 25px;

`;

const Title = styled.p`

    
    margin-top:0;
    width: 49px;
    height: 8px;
    font-family: 'Open Sans', sans-serif;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color:grey;
    padding: 0px 10px 5px 11px;
`;

type ButtonProps = {
    image: any,
    alt: string,
    title: string,
    
}
const Buttons: React.FC<ButtonProps> = ({image, alt, title}: ButtonProps) => {
    return(
        <StyledDiv>
            <div className='button-img'>
                <StyledImg src={image} alt={alt}/>
            </div>
            <div className='button-title'>
                <Title>{title}</Title>
            </div>
        </StyledDiv>
    );
}

export default Buttons;