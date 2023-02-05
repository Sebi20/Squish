import {images} from './images'
import styled from 'styled-components';
import {Link, useLocation, useNavigate} from 'react-router-dom';


const Title = styled.h1`
  color: pink;
  margin-left: 30px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px 220px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: aliceblue;
  margin-bottom: 10px;
  border-radius: 10%;
  margin-right:10px;
  text-align: center;
`;

const Name = styled.h3`
  color: pink;
`;

const Img = styled.img`
  width: 200px;
  height:200px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    }
`;

function App() {

  const test = images.map(element =>{
    return(
      <>
        <Link to={'/squish'} state={{
          img: element.url,
          name: element.name,
          desc: element.desc,
          desc2: element.desc2,
          date: element.date,
          idNum: element.num
        }}>
          <Container>
            <Img key={element.name} src={element.url}></Img>
            <Name>{element.name}</Name>
          </Container>
          </Link>
      </>
    )
});

  return (
   <>
   <Title>SQUISHMALLOWS</Title>
    <Grid>
      {test}
    </Grid>
    
   </>
  );
}
export {Title}
export default App;
