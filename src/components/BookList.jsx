import { Component } from "react";
import { Container, Row, Col, Form} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {

    state = {
        searchBook: '',
    }

    //cambiamento del campo di recerca 
    handleSearch = (e) => {
        this.setState({searchBook: e.target.value})
    }

    //filtro i libri 
    filterBooks = () =>{
        const {searchBook} = this.state
        const {libri} =  this.props

        return libri.filter((book) =>
        book.title.includes(searchBook))

    }

  render() {
    const filteredBook = this.filterBooks()
    return (
      <Container>
        <Row className="gy-4 my-3">
            <Col>
            <Form.Control
            type="text" placeholder = "Cerca titolo libro"
            value = {this.state.searchBook}
            onChange = {this.handleSearch}>
            </Form.Control>
            </Col>
            </Row>
            <Row className="gy-4 my-3">
          {filteredBook.map((book) => (
            <Col xs={12} md={6} lg={4} key={book.asin}>
            <SingleBook  libro={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
