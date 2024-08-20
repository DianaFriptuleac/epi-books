import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mybooks from "../assets/books/fantasy.json"
import '../App.css';

class AllTheBooks extends Component {
render() {
    return(
        <Container>
            <Row>
                {mybooks.map((singlebook) => {
                    return(
                        <Col xs={12} md ={6} lg={3} key={singlebook.id}>
                        <Card className="my-4 g-4 h-100">
                        <Card.Img variant="top" className="card-img-top" src={singlebook.img} />
                        <Card.Body className="pb-0">
                          <Card.Title className="title-overflow">{singlebook.title}</Card.Title>
                          <Card.Text className="text-center ">
                           {singlebook.price} $
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