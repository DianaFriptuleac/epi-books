import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
    state = {
        selected: false,
    };

    toggleSelected = () => {
        this.setState((prevState) => ({   //prevState sta per stato precedente. 
            //l'oggetto di stato corrente del componente
            selected: !prevState.selected, //Se selected è true !prevState.selected diventa false e viceversa. 
        }));
    };

// SingleBook deve mostrare UN solo libro
// si presuppone che questo libro gli arrivi dalle props

// immaginiamo di invocare sempre SingleBook con una prop che si chiama "libro"
// ci possiamo aspettare lèoggetto del libro in this.props.libro

render() {
    return(
    
                        <Col xs={12} md ={6} lg={3} key={this.props.libro.asin}>
                        <Card
                            className={`mb-4 g-4 h-100 ${this.state.selected ? 'border border-danger border-3' : ''}`}
                            onClick={this.toggleSelected}
                            style={{ cursor: "pointer" }} 
                        >
                        <Card.Img variant="top" className="card-img-top" src={this.props.libro.img} />
                        <Card.Body className="pb-0">
                          <Card.Title className="title-overflow">{this.props.libro.title}</Card.Title>
                          <div className="d-flex justify-content-center">
                          <Button variant="info" className="text-center px-3 text-light mb-3">
                           {this.props.libro.price} $
                          </Button>
                          </div>
                        </Card.Body>
                      </Card>
                      </Col>
     
         
       
    )
}
}
export default SingleBook