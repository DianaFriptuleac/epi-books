import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mybooks from "../assets/books/fantasy.json"

class AllTheBooks extends Component {
render() {
    return(
        <Container>
            <Row>
                {mybooks.map((singlebook) => {
                    return(
                        <Col xs={12} md ={6} lg={3} key={singlebook.id}>
                        <Card className="my-3">
                        <Card.Img variant="top" src={singlebook.img} />
                        <Card.Body>
                          <Card.Title>{singlebook.title}</Card.Title>
                          <Card.Text>
                           {singlebook.price}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Col>
                    )
                })}
     
            </Row>
        </Container>
    )
}
}
export default AllTheBooks