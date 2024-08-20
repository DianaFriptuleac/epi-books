import {Container, ListGroup } from "react-bootstrap"
const MyFooter = function(){
    return(
        <footer className="bg-dark">
        <Container fluid>
         <ListGroup as="ul">
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
            </Container>
            </footer>
    )
}
export default MyFooter