import styled from "styled-components";
import {useLocation, Link} from "react-router-dom"
import { Title } from "../App";


const Container = styled.div`
    background-color: aliceblue;
    border-radius: 1%;
    display: flex;
    width: 800px;
    justify-content: center;
    align-items: center;
    margin:0 auto;
`;

const Heading = styled.h1`
    font-size: 80px;
    text-align: center;
`;

const InnerContainer = styled.div`
    /* background-color: red; */
    padding: 5px;
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
            <Link to={'/'}><Title>SQUISHMALLOWS</Title></Link>
            <Heading>Meet {location.state.name}</Heading>
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