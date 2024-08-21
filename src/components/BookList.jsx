import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col >
                 {this.props.libri.map((book) =>(
                    <SingleBook key = {book.asin} libro ={book}/>
                 ))}
                    </Col>
                    </Row>
            </Container>
        )
    }
}
export default BookList