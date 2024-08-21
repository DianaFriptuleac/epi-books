import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
    
state = {
    bookState : {
        stato: false,
    }
}

// SingleBook deve mostrare UN solo libro
// si presuppone che questo libro gli arrivi dalle props

// immaginiamo di invocare sempre SingleBook con una prop che si chiama "libro"
// ci possiamo aspettare lèoggetto del libro in this.props.libro

render() {
    return(
        <Container>
            <Row className="gy-4 my-3">
                        <Col xs={12} md ={6} lg={3} key={this.props.libro.asin}>
                        <Card className="mb-4 g-4 h-100">
                        <Card.Img variant="top" className="card-img-top" src={this.props.libro.img} />
                        <Card.Body className="pb-0">
                          <Card.Title className="title-overflow">{this.props.libro.title}</Card.Title>
                          <div className="d-flex justify-content-center">
                          <Button variant="info" className="text-center px-3 text-light ">
                           {this.props.libro.price} $
                          </Button>
                          </div>
                        </Card.Body>
                      </Card>
                      </Col>
     
            </Row>
        </Container>
    )
}
}
export default SingleBook