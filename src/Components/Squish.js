import styled from "styled-components";
import {useLocation, Link} from "react-router-dom"


const Container = styled.div`
    background-color: aliceblue;
    border-radius: 1%;
    display: flex;
    width: 800px;
`;

const InnerContainer = styled.div`
    /* background-color: red; */
`;

const P = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Img = styled.img`
    width: 400px;
    height: auto;
`;



function Squish(){
    const location = useLocation();
    return(
        <>
            <Container>
                <Img src={location.state.img}></Img>
                <InnerContainer>
                    <P>{location.state.desc2}</P>
                    <P>{location.state.desc}</P>

                    <h3>Collector Number:</h3>
                    <P>{location.state.idNum}</P>

                    <h3>Squishdate:</h3>
                    <P>{location.state.date}</P>
                </InnerContainer>
            </Container>
            
        </>
    )
}

export default Squish;